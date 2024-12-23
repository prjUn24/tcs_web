// Import required modules and Firebase services
import { app } from "./Config";
import { addUserData, getUserByEmail } from "./Database";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./Database";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import Cookies from "js-cookie";

export const auth = getAuth(app);

// Utility function to set authentication token in cookies
const setAuthToken = (token) => {
    Cookies.set('authToken', token, {
        expires: 20, // Expiry in days
        secure: true,
        sameSite: 'Strict',
    });
};

// 
// Function to sign up a new user
export const signup = async (registerData) => {
    try {
        // Check if email already exists in Firestore
        const userExists = await getUserByEmail(registerData.email);
        if (userExists) {
            return {
                success: false,
                error: 'This email is already registered. Please use a different email address.'
            };
        }

        // Create a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password);

        // Create user data object
        const newUserData = {
            uid: userCredential.user.uid,
            firstName: registerData.firstName,
            lastName: registerData.lastName,
            email: registerData.email,
            address: registerData.address || "",
            phone: registerData.phone || "",
            emailVerified: false,
            authProvider: 'email',
            createdAt: new Date().toISOString(),
        };

        // Add user to Firestore database
        await addUserData(newUserData);

        // Send email verification
        await sendEmailVerification(userCredential.user);

        return {
            success: true,
            message: 'Account created successfully. Please verify your email before logging in.'
        };
    } catch (error) {
        console.error('Signup error:', error);
        return {
            success: false,
            error: error.message,
        };
    }
};

// Function to sign in a user
export const signIn = async (credentials) => {
    try {
        if (!credentials.email || !credentials.password) {
            return { success: false, error: 'Email and password are required.' };
        }

        // Check if user exists in Firestore
        const existingUser = await getUserByEmail(credentials.email);

        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);

        // Check if email is verified
        if (!userCredential.user.emailVerified) {
            return { success: false, error: 'Please verify your email before logging in.' };
        }

        // Generate and set authentication token
        const token = await userCredential.user.getIdToken();
        setAuthToken(token);

        return { success: true, message: 'Logged in successfully' };
    } catch (error) {
        console.error('Sign-in error:', error);
        return { success: false, error: error.message };
    }
};

// Function to resend verification email
export const resendVerificationEmail = async (email, password) => {
    try {
        // Temporarily sign in the user to get user object
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        // Send verification email
        await sendEmailVerification(userCredential.user);

        return {
            success: true,
            message: 'Verification email has been resent. Please check your inbox.'
        };
    } catch (error) {
        console.error('Resend verification error:', error);
        return { success: false, error: error.message };
    }
};

// Function to handle forgot password flow
export const forgotPassword = async (email) => {
    try {
        // Check if user exists in Firestore
        const user = await getUserByEmail(email);
        if (!user) {
            return { success: false, error: 'No account found with this email address.' };
        }

        // Send password reset email
        await sendPasswordResetEmail(auth, email);

        return {
            success: true,
            message: 'Password reset email sent. Please check your inbox.'
        };
    } catch (error) {
        console.error('Forgot password error:', error);
        return { success: false, error: error.message };
    }
};

// Function to handle Google Sign-In
export const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
        // Sign in using Google popup
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check if user exists in Firestore
        const existingUser = await getUserByEmail(user.email);
        if (existingUser) {
            if (existingUser.authProvider !== 'google') {
                return { success: false, error: 'An account with this email exists. Use email/password to sign in.' };
            }
        } else {
            // Add new Google user to Firestore
            const newUserData = {
                uid: user.uid,
                firstName: user.displayName?.split(' ')[0] || '',
                lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
                email: user.email,
                emailVerified: true,
                authProvider: 'google',
                createdAt: new Date().toISOString(),
            };
            await addUserData(newUserData);
        }

        // Generate and set authentication token
        const token = await user.getIdToken();
        setAuthToken(token);

        return { success: true, message: 'Logged in successfully with Google' };
    } catch (error) {
        console.error('Google Sign-In error:', error);
        return { success: false, error: error.message };
    }
};


// Function to verify the reset code and reset the password
export const verifyCodeAndResetPassword = async (email, verificationCode, newPassword) => {
    try {
        // Locate the user's document in Firestore
        const userDoc = await getUserByEmail(email);
        if (!userDoc) {
            return { success: false, error: 'No account found with this email address.' };
        }

        // Verify the provided code (mock example, replace with your logic)
        if (userDoc.verificationCode !== verificationCode) {
            return { success: false, error: 'Invalid verification code.' };
        }

        // Reset the password in Firebase Authentication
        await auth.currentUser.updatePassword(newPassword);

        // Update the user document to clear the code (optional)
        const userRef = doc(db, 'users', userDoc.id);
        await updateDoc(userRef, { verificationCode: null });

        return { success: true, message: 'Password reset successfully.' };
    } catch (error) {
        console.error('Password reset error:', error);
        return { success: false, error: error.message };
    }
};
