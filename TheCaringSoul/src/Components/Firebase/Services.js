import { 
    collection, 
    query, 
    where, 
    doc, 
    getDocs, 
    updateDoc, 
    serverTimestamp, 
    addDoc, 
    deleteDoc, 
    arrayUnion,
    arrayRemove,
    getDoc
} from "firebase/firestore";
import { db } from "./Database";
import { auth } from "./Authentication";
import { v4 } from "uuid";
import emailjs from "@emailjs/browser"

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
// Utility function to generate unique codes
const generateUniqueCode = async (field, length) => {
    let code;
    let unique = false;

    while (!unique) {
        code = Math.random().toString(36).substring(2, length + 2).toUpperCase();
        const search = query(collection(db, "services"), where(field, "==", code));
        const snapShot = await getDocs(search);
        unique = snapShot.empty;
    }

    return code;
};

// Create a new service
export const createService = async (formData, setMessage, message) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            setMessage({ ...message, error: "User not authenticated" });
            return;
        }

        const bookCode = await generateUniqueCode("book_code", 8);
        const closeCode = await generateUniqueCode("close_code", 8);
        const tempId = v4();

        const tempServiceData = {
            book_code: bookCode,
            close_code: closeCode,
            tempId: tempId,
            userId: user.uid,
            userEmail: user.email,
            status: "pending",
            createdAt: serverTimestamp(),
            ...formData,
        };

        const tempDocRef = await addDoc(collection(db, "tempServices"), tempServiceData);
        console.log("Temporary service created with ID:", tempDocRef.id);

        // Update user's services array
        try {
            await updateDoc(doc(db, "users", user.uid), {
                services: arrayUnion({
                    book_code: bookCode,
                    serviceId: tempDocRef.id,
                    status: "pending"
                }),
            });
            console.log("User services array updated successfully");
        } catch (err) {
            console.error("Error updating user services array:", err);
            // Clean up the temporary service if user update fails
            await deleteDoc(doc(db, "tempServices", tempDocRef.id));
            throw new Error("Failed to update user services array");
        }

        // Send booking code email
        try {
            await sendBookingCodeEmail(user.email, bookCode);
            console.log("Booking confirmation email sent successfully");
        } catch (err) {
            console.error("Failed to send booking confirmation email:", err);
            setMessage({
                ...message,
                resolved: `Service booked successfully. Booking Code: ${bookCode}. (Email notification failed)`,
                error: null,
            });
            return;
        }

        setMessage({
            ...message,
            resolved: `Service booked successfully. Booking Code: ${bookCode}`,
            error: null,
        });
    } catch (err) {
        console.error("Service creation error:", err);
        setMessage({ ...message, error: err.message });
    }
};



export const confirmBooking = async (bookingCode, setMessage, message) => {
    try {
        const user = auth.currentUser;

        if (!user) {
            setMessage({ ...message, error: "User not authenticated" });
            return;
        }

        const trimmedBookingCode = bookingCode.trim();
        console.log("Current User ID:", user.uid);
        console.log("Booking Code:", trimmedBookingCode);

        // Query to find the temporary service
        const tempQuery = query(
            collection(db, "tempServices"),
            where("book_code", "==", trimmedBookingCode),
            where("userId", "==", user.uid)
        );

        const snapshot = await getDocs(tempQuery);

        if (snapshot.empty) {
            setMessage({ ...message, error: "Invalid booking code or unauthorized" });
            return;
        }

        const tempDoc = snapshot.docs[0];
        const tempData = tempDoc.data();
        const tempServiceId = tempDoc.id;

        // Create confirmed service data
        const confirmedServiceData = {
            ...tempData,
            status: "confirmed",
            confirmedAt: serverTimestamp(),
            book_code: trimmedBookingCode // Ensure the confirmed service has trimmed code
        };

        delete confirmedServiceData.tempId; // Remove temporary ID if it exists

        // Add confirmed service to services collection
        const confirmedServiceRef = await addDoc(collection(db, "services"), confirmedServiceData);
        console.log("Service confirmed with ID:", confirmedServiceRef.id);

        // Fetch user document and update services
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
            throw new Error("User document does not exist.");
        }

        const userData = userDoc.data();
        const services = userData.services || [];

        console.log("Current user services before update:", services);

        // Remove any references to this booking (both temporary and confirmed)
        const updatedServices = services.filter(service => 
            service.book_code.trim() !== trimmedBookingCode
        );

        // Add only the confirmed service to user's services
        updatedServices.push({
            book_code: trimmedBookingCode, // Use trimmed code
            serviceId: confirmedServiceRef.id,
            status: "confirmed",
        });

        // Update user document with the new services array
        await updateDoc(userDocRef, { services: updatedServices });
        console.log("User services array updated successfully.");

        // Delete the temporary service document after updating user services
        await deleteDoc(doc(db, "tempServices", tempServiceId));
        console.log("Temporary service document deleted successfully.");

        setMessage({
            ...message,
            resolved: "Booking confirmed successfully!",
            error: null,
        });
    } catch (err) {
        console.error("Error in confirmBooking:", err);
        setMessage({ ...message, error: err.message });
    }
};
// Close an existing service
export const closeService = async (closeCode, formData, setMessage, message) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            setMessage({ ...message, error: "User not authenticated" });
            return;
        }

        const serviceQuery = query(
            collection(db, "services"),
            where("close_code", "==", closeCode),
            where("userId", "==", user.uid)
        );
        const snapshot = await getDocs(serviceQuery);

        if (snapshot.empty) {
            setMessage({ ...message, error: "Invalid closing code or unauthorized" });
            return;
        }

        const serviceDoc = snapshot.docs[0];
        const serviceId = serviceDoc.id;
        const serviceData = serviceDoc.data();

        // Update service status to closed
        await updateDoc(doc(db, "services", serviceId), {
            status: "closed",
            closedAt: serverTimestamp(),
            ...formData,
        });

        // Update user's services array
        try {
            // Remove confirmed service reference
            await updateDoc(doc(db, "users", user.uid), {
                services: arrayRemove({
                    book_code: serviceData.book_code,
                    serviceId: serviceId,
                    status: "confirmed"
                })
            });

            // Add closed service reference
            await updateDoc(doc(db, "users", user.uid), {
                services: arrayUnion({
                    book_code: serviceData.book_code,
                    serviceId: serviceId,
                    status: "closed"
                })
            });

            console.log("User services array updated with closed service");
        } catch (err) {
            console.error("Error updating user services array:", err);
            throw new Error("Failed to update user services array");
        }

        setMessage({
            ...message,
            resolved: "Service closed successfully",
            error: null,
        });
    } catch (err) {
        console.error("Service closing error:", err);
        setMessage({ ...message, error: err.message });
    }
};

// Get all services for the authenticated user
export const getUserServices = async (setServiceList, setMessage, message) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            setMessage({ ...message, error: "User not authenticated" });
            return;
        }

        const servicesQuery = query(
            collection(db, "services"),
            where("userId", "==", user.uid)
        );
        const snapshot = await getDocs(servicesQuery);

        const services = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        setServiceList(services);
        
        if (services.length === 0) {
            setMessage({ ...message, error: "No services found" });
        }
    } catch (err) {
        console.error("Get services error:", err);
        setMessage({ ...message, error: err.message });
    }
};

// SendGrid email function
const sendBookingCodeEmail = async (email, bookingCode) => {
    try {
        const templateParams = {
            to_email: email,
            bookingCode: bookingCode, // Ensure this matches your template variable
        };

        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Use public key here
        );

        console.log('Email sent successfully:', response);
        return true;
    } catch (error) {
        console.error("Email sending failed:", error);
        throw new Error(`Failed to send email: ${error.message}`);
    }
};