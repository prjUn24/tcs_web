// Database.js
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    query,
    where
} from "firebase/firestore";
import { app } from "./Config";

export const db = getFirestore(app);

export const addUserData = async (userData) => {
    try {
        console.log('Adding user data:', userData);
        const userRef = doc(db, 'users', userData.uid);
        await setDoc(userRef, userData);
        
        console.log('User data added successfully');
        return {
            success: true,
            message: 'User data saved successfully'
        };
    } catch (error) {
        console.error('Error adding user data:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

export const getUserList = async (setUserList, setMessage, message) => {
    try {
        const users = [];
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
        });

        if (users.length === 0) {
            return setMessage({
                ...message,
                error: "User List is Empty",
                resolved: null,
                navigate: null,
            });
        } else {
            setUserList(users);
        }
    } catch (err) {
        return setMessage({
            ...message,
            error: err.message,
            resolved: null,
            navigate: null,
        });
    }
};

export const upDateUser = async (obj, setMessage, message) => {
    try {
        const userRef = doc(db, "users", obj.uid);
        await updateDoc(userRef, obj);

        return setMessage({
            ...message,
            resolved: `${obj.uid} Data Updated Successfully`,
            error: null,
            navigate: null,
        });
    } catch (err) {
        return setMessage({
            ...message,
            error: err.message,
            resolved: null,
            navigate: null,
        });
    }
};

export const deleteUser = async (uid, setMessage, message) => {
    try {
        const userRef = doc(db, "users", uid);
        await deleteDoc(userRef);

        return setMessage({
            ...message,
            resolved: `Record Deleted Successfully`,
            error: null,
            navigate: null,
        });
    } catch (err) {
        return setMessage({
            ...message,
            error: err.message,
            resolved: null,
            navigate: null,
        });
    }
};

export const getUserByEmail = async (email) => {
    try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            return null;
        }
        
        const userDoc = querySnapshot.docs[0];
        return {
            uid: userDoc.id,
            ...userDoc.data()
        };
    } catch (error) {
        console.error('Error getting user by email:', error);
        return null;
    }
};