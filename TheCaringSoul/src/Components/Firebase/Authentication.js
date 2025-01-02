// Auth.js
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
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth";
import Cookies from "js-cookie";

export const auth = getAuth(app);

// Token management
const setAuthToken = async (user) => {
    if (user) {
        const token = await user.getIdToken();
        Cookies.set('authToken', token, {
            expires: 20,
            secure: true,
            sameSite: 'Strict'
        });
    } else {
        Cookies.remove('authToken');
    }
};

// Authentication state observer
export const initializeAuthListener = (callback) => {
    return onAuthStateChanged(auth, async (user) => {
        if (user) {
            await setAuthToken(user);
        } else {
            Cookies.remove('authToken');
        }
        callback?.(user);
    });
};

// Sign up function
export const signup = async (registerData) => {
    try {
        const userExists = await getUserByEmail(registerData.email);
        if (userExists) {
            return {
                success: false,
                error: 'Email already registered'
            };
        }

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            registerData.email,
            registerData.password
        );

        const newUserData = {
            uid: userCredential.user.uid,
            firstname: registerData.firstname || '',
            lastname: registerData.lastname || '',
            email: registerData.email,
            address: registerData.address || "",
            number: registerData.number || "",
            emailVerified: false,
            authProvider: 'email',
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };

        await addUserData(newUserData);
        await sendEmailVerification(userCredential.user);
        await setAuthToken(userCredential.user);

        return {
            success: true,
            message: 'Account created successfully. Please verify your email.'
        };
    } catch (error) {
        console.error('Signup error:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

// Sign in function
export const signIn = async (credentials) => {
    try {
        if (!credentials.email || !credentials.password) {
            return { success: false, error: 'Email and password required' };
        }

        const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
        );

        if (!userCredential.user.emailVerified) {
            return { 
                success: false, 
                error: 'Please verify your email before logging in'
            };
        }

        // Update last login and any new profile information
        const userRef = doc(db, "users", userCredential.user.uid);
        await updateDoc(userRef, {
            lastLogin: new Date().toISOString(),
            ...(credentials.firstname && { firstname: credentials.firstname }),
            ...(credentials.lastname && { lastname: credentials.lastname }),
            ...(credentials.number && { number: credentials.number }),
            ...(credentials.address && { address: credentials.address })
        });

        await setAuthToken(userCredential.user);

        return { 
            success: true, 
            message: 'Logged in successfully'
        };
    } catch (error) {
        console.error('Sign-in error:', error);
        return { 
            success: false, 
            error: error.message 
        };
    }
};

// Google sign in
export const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const existingUser = await getUserByEmail(user.email);
        if (existingUser) {
            if (existingUser.authProvider !== 'google') {
                return { 
                    success: false, 
                    error: 'Account exists. Use email/password to sign in.'
                };
            }
            // Update last login time for existing Google user
            const userRef = doc(db, "users", user.uid);
            await updateDoc(userRef, {
                lastLogin: new Date().toISOString()
            });
        } else {
            const newUserData = {
                uid: user.uid,
                firstName: user.displayName?.split(' ')[0] || '',
                lastName: user.displayName?.split(' ').slice(1).join(' ') || '',
                email: user.email,
                emailVerified: true,
                authProvider: 'google',
                createdAt: new Date().toISOString(),
                lastLogin: new Date().toISOString()
            };
            await addUserData(newUserData);
        }

        await setAuthToken(user);

        return { 
            success: true, 
            message: 'Logged in successfully with Google'
        };
    } catch (error) {
        console.error('Google Sign-In error:', error);
        return { 
            success: false, 
            error: error.message 
        };
    }
};

// Password reset
export const forgotPassword = async (email) => {
    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return { 
                success: false, 
                error: 'No account found with this email'
            };
        }

        await sendPasswordResetEmail(auth, email);

        return {
            success: true,
            message: 'Password reset email sent'
        };
    } catch (error) {
        console.error('Password reset error:', error);
        return { 
            success: false, 
            error: error.message 
        };
    }
};

// Resend verification email
export const resendVerificationEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);

        return {
            success: true,
            message: 'Verification email sent'
        };
    } catch (error) {
        console.error('Verification email error:', error);
        return { 
            success: false, 
            error: error.message 
        };
    }
};

// Sign out
export const signOut = async () => {
    try {
        await auth.signOut();
        Cookies.remove('authToken');
        return { 
            success: true, 
            message: 'Signed out successfully'
        };
    } catch (error) {
        console.error('Sign out error:', error);
        return { 
            success: false, 
            error: error.message 
        };
    }
};