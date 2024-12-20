import React, { useState } from 'react'

export default function ForgotPassword() {
    const [credentials, setCredentials] = useState({number:'', otp:''})
    const formhandle =(e)=>{
        e.preventDefault()
    }
  return (
    <div className='w-full bg-amour hero h-screen flex justify-center align-middle relative p-3 md:p-5 lg:p-10'>
        

        <form className='p-5 scale-110 text-sm md:text-md bg-white flex flex-col md:w-96 pl-7 pr-7 text-center rounded-xl shadow-xl  self-center '
         onSubmit={(e)=> {formhandle(e)}} 
         >
            <div className='w-full text-center font-bold text-2xl'>OTP verification</div>
            <div className='p-3'>
                    <div className='w-full text-center text-sm'>otp sent to registered mobile number</div>
                    <input required
  type="tel"
  className='w-full mt-4 p-1 pl-2 text-left bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
  pattern="^\d{10}$"
  maxLength={10}
  placeholder='enter otp here'
  value={credentials.number}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
        setCredentials({ ...credentials, number: value });
    }
  }}
  
/>
            </div>
            <div className='w-full flex p-5 flex-row gap-5'>
                <button className='bg-green-400 font-medium text-white p-2 rounded pl-3 pr-3 cursor-pointer'>Resend otp</button>
                <button className='bg-green-400 font-medium text-white p-2 rounded pl-3 pr-3 cursor-pointer' type='submit' >Submit</button>
              </div>
        </form>
      
    </div>
  )
}
