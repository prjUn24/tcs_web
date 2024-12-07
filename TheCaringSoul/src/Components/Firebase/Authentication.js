import { app } from "./Config";
import { addUserData } from "./Database";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCustomToken, sendPasswordResetEmail } from "firebase/auth";
import Cookies from "js-cookie";
import { send } from "vite";

export const auth = getAuth(app)



const setAuthId = (id) => {
    Cookies.set('id', id, {
        expires: 15,
        secure: true,
        sameSite: 'Strict'
    }) 
}

export const signUp = async(obj, setMessage, message) => {
    try{
        const credentials = await createUserWithEmailAndPassword(auth, obj.email, obj.pass)
        const usr = credentials.user
        const id = await usr.getIdToken()
        setAuthId(id)
        const objCollection = {firstName: obj.firstName, lastName: obj.lastName, emailId: obj.email, phoneNumber: obj.phoneNumber, address: obj.address }
        await addUserData(obj= objCollection, setMessage, message)
        return setMessage({...message , resolved: `Account Created Successfully ${credentials.user}`, error:null, navigate:null })
    }catch (err){
        return setMessage({...message, error: err, resolved:null, navigate:null})

    }
}



export const signIn = async(obj, setMessage, message) => {
    try{
        const credentials = await signInWithEmailAndPassword(auth, obj.email, obj.pass)
        return setMessage({...message, resolved: `${credentials.user} Loggged In Successfully`, error:null, navigate:null})
    }catch(err){
        return setMessage({...message, error: err, resolved:null, navigate:null})
    }
}


export const getAuthId = async(obj, setMessage, message) => {
    const token = Cookies.get('id')

    if(token){
        try{
            const credentials = await signInWithCustomToken(token)
            const usr = credentials.user

            return setMessage({...message, resolved: `${usr.email} Logged In Successfully `,error:null, navigate:null})
        }catch(err){
            return setMessage({...message, navigate: '/login', resolved:null, error:null})
        }
    }else{
        return  setMessage({...message, navigate: '/login', resolved:null, error:null})
    }
}


export const forgotPassword = async(obj, setMessage, message) =>{
    try{
        await  sendPasswordResetEmail(auth, obj.email)
        return setMessage({...message, resolved: `Password Reset Mail Sent to ${obj.email}`, error:null, navigate:null})
    }catch(err){
        return setMessage({...message, error: err, resolved:null, navigate:null})
    }
}