import { getFirestore, collection, doc, addDoc, getDoc, updateDoc } from "firebase/firestore";
import { app } from "./Config";
import { MdNotListedLocation } from "react-icons/md";



export const db = getFirestore(app)


export const addUserData = async (obj, setMessage, message) => {
    try{
        const collectionRef = await addDoc(collection(db, 'users'), obj)
    }catch(err){
          return setMessage({...message, error: err, resolved: null, navigate: null})
    }
}

export const getUserList = async(setUserList, setMessage, message) => {
    try{
        const usrs = []
        const query = await getDoc(collection(db, 'users'))

        query.forEach((doc) => {
            usrs.push({...doc.data()})
        })


        return usrs.length == 0 ?  setMessage({...message, error:'User List is Emplty', resolved: null, navigate:null}) : setUserList(usrs)
    }catch(err){
        return setMessage({...message, error: err, resolved: null, navigate: null})
    }
}

export const upDateUser = async(obj, setMessage, message) => {
     try{
        const usrRef = doc(db, 'users', obj.email)
        await updateDoc(usrRef, obj)

        return setMessage({...message, resolved:`${obj.email} Data Updated`, error:null, navigate:null})
     }catch(err){
        return setMessage({...message, error: err, resolved: null, navigate: null })
     }
}


export const deleteUser = async (obj, setMessage, message) => {
    try{
        const usrRef = doc(db, 'users', obj.email)
        await deleteUser(usrRef)
        return setMessage({...message, resolved: `Record Deleted`, error:null, navigate: null})
    }catch(err){
        return setMessage({...message, error: err, resolved: null, navigate: null})
    }
}