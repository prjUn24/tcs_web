import React, { useEffect, useState } from 'react'
import {getUserServices} from "../Firebase/Services"
import { useNavigate } from 'react-router-dom'
export default function ShowServices() {
    const [serviceList, setServiceList] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const [message, setMessage] = useState({
        error: null,
        resolved: null,
      });
    useEffect(()=>{
       const fetchData = async() =>{
        try{
            
           await getUserServices(setServiceList, setMessage, message)
           setLoading(false)
        }catch(err){
                setMessage({...message, error:err})
        }

        setLoading(false)
       }



       fetchData()
    },[])


    console.log(serviceList)
    if(loading){
        return <div className='loading loading-spinner loading-md'></div>
    }
  return (
    <div className='hero h-screen bg-amour '>
        <div className='lg:w-2/4 w-full p-6  '>
        <div className='h-screen text-slateblue mt-20 flex flex-col gap-3 overflow-auto'>
        {serviceList.map((obj,idx)=>{
            return <div key={idx} className='bg-white shadow-sm rounded-md w-full p-2 ' >
                <div className='ml-4'>ID <span className=' font-semibold'>{obj.id}</span></div>
                <div className='divider mt-1 mb-1'></div>
                <div className='flex flex-col ml-4'>
                    <div>Service type: {obj.availability}</div>
                    <div>Duration {obj.months} / {obj.weeks} </div>
                    
                </div>
              
                <div className='w-full h-8 mt-2 relative'>
                     <div className={`absolute right-2 p-1 rounded ${obj.status == "confirmed" ? 'bg-green-200 text-green-500' :'bg-yellow-200 text-yellow-500'}`}>{obj.status}</div>
                </div>
            </div>
        })}
         <div className='mt-6 w-full justify-center align-middle flex'>
                <button onClick={()=>{navigate("/")}} className='bg-slateblue p-2 rounded text-white font-semibold bg-slateblue/80 hover:bg-slateblue cursor-pointer'>Go Back</button> 
         </div>
        </div>

       
        </div>
    </div>
  )
}
