import { collection, query, where, doc, getDocs,  updateDoc, serverTimestamp, addDoc, arrayUnion, getDoc } from "firebase/firestore";

import { db } from "./Database";
import {auth} from "./Authentication"
import { v4  } from "uuid";


const generateOtp = async() => {
    let otp; let unique = false

    while(!unique){
        otp = Math.floor(100000 + Math.random() * 900000)
        const search = query(collection(db, 'services'), where("otp", "==", otp) )
        const snapShot = await getDocs(search)

        if(snapShot.empty){
            unique = true
        }
    }

    return otp
}

const generateServiceId = async() => {
    let serviceId; let unique = false

    while(!unique){
        serviceId = v4()
        const search = query(collection(db, 'services'), where("serviceId", "==", serviceId))
        const snapShot = await getDocs(search)

        if(snapShot.empty){
            unique = true
        }
    }

    return serviceId
}

export const createService = async(obj, setMessage, message) => {
    try{
        const usr  = auth.currentUser
        if(!usr){
            return setMessage({...message, error: "User Not Authenticated", resolved: null, navigate: null})
        }

        const serviceId = await generateServiceId()
        const otp = await generateOtp()

        const serviceData = {
            userEmail: obj.email, serviceId: serviceId, otp: otp,  serviceDetail: obj.serviceDetails, status:'Open', createdAt: serverTimestamp()
        }
        const serviceRef = await addDoc(collection(db, 'services'), serviceData)
        const usrRef = doc(db, "users", obj.email)

        await updateDoc(usrRef, {serviceBooked: arrayUnion(serviceId)})
        return setMessage({...message, resolved: `Service Created Successfully ${serviceId}`, error: null, navigate: null})


    }catch(err){
        return setMessage({...message, error: err, resolved: null, navigate: null})
    }
}

export const closeService = async(serviceId, otp, setMessage, message) => {
    try{

        const serviceRef = doc(db, 'services', serviceId)
        const service = await getDoc(serviceRef)

        if(!service.exists()){
            return setMessage({...message, error: `Service Not Found`, resolved: null, navigate: null})
        }

       
        if(otp == service.otp.toString()){
            await updateDoc(serviceRef, {status: "Closed"})
        }

        return setMessage({...message, resolved: `Service ${serviceId} Closed Successfully`, error: null, navigate: null})
    }catch(err){
        return setMessage({...message, error:err, resolved: null, navigate: null})
    }
}


export const assignService = async(serviceId, staffName, setMessage, message) => {
    try{
        const serviceRef = doc(db, 'services', serviceId)
        const service = await getDoc(serviceRef)

        if(!service.exists()){
            return setMessage({...message, error: `Service Not Found`, resolved: null, navigate: null})
        }

       
        await updateDoc(serviceRef, {status: "Assigned", staffName: staffName})
        return setMessage({...message, resolved:`Service ${serviceId} Assigned `, error: null, navigate: null})
    }catch(err){
        return setMessage({...message, error: err, resolved: null, navigate: null})
    }
}


export const getService = async(setServiceList, setMessage, message) => {
    try{
        const serviceRef = collection(db, "services")
        const snapShot = await getDocs(serviceRef)

        if(snapShot.empty){
            return setMessage({...message, error: 'No Services Found', resolved: null, navigate: null})
        }

        const services  = []
        snapShot.forEach((doc) => {
            services.push({...doc.data()})
        })
        
        return services.length == 0 ?  setMessage({...message, error: 'No Services Found', resolved: null, navigate: null})  : setServiceList(services)
    }catch(err){
        return  setMessage({...message, error: err, resolved: null, navigate: null})
    }
}