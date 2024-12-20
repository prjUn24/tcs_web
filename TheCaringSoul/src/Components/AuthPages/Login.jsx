import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [credentials, setCredentials] = useState({email:'', pass:''})
    const [info, setInfo] = useState('')

    const navigate = useNavigate()

    const formSubmit =(e)=> {
        e.preventDefault()
    }
  return (
    <div className='w-full bg-amour hero h-screen flex justify-center align-middle relative p-3 md:p-5 lg:p-10'>
        

        <form className='p-5 scale-110 text-sm md:text-md bg-white flex flex-col md:w-96 pl-7 pr-7 text-center rounded-xl shadow-xl  self-center ' onSubmit={(e)=> {formSubmit(e)}} >
            <div className='w-full text-center font-bold text-2xl'>Login</div>

            <div className='mt-6 text-left  flex flex-col gap-2'>
                <div className='font-medium'>Email</div>
                <input required value={credentials.email} onChange={(e)=>{setCredentials({...credentials, email:e.target.value})}} type="email" placeholder='email' className='w-full p-1 pl-2  bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black' name="" id="" />
                <div required className='font-medium'>Password</div>
                <input value={credentials.pass} onChange={(e)=>{setCredentials({...credentials, pass:e.target.value})}} type="password" placeholder='password' className='w-full relative p-1 pl-2 rounded bg-amber-50/20 border border-gray-300  active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black/80'  name="" id="" />
            </div>
            <div onClick={()=>{navigate("/forgotpassword")}} className='w-full text-right mt-2 underline underline-offset-1 text-slateblue/80 cursor-pointer hover:text-slateblue'>forgot password</div>

            <button type='submit' className='mt-4 rounded bg-green-400/70 hover:bg-green-400 hover:text-white text-white/80 flex-inline p-2  font-bold'>Login</button>

                <div className='mt-2'>{info}</div>
            <div className='flex flex-row justify-center align-middle gap-2 mt-6'>
                <div className='w-full p-[1px] rounded  bg-slate-500/15 self-center'></div>
                <div className='self-center'>or</div>
                <div className='w-full p-[1px] rounded  bg-slate-500/15 self-center'> </div>
            </div>
            <div className='mt-6 text-sm'>Dont have an account <span className='underline underline-offset-1 text-slateblue/80 cursor-pointer hover:text-slateblue' onClick={()=>{navigate("/signup")}}>sign up</span> here</div>
           
        </form>
      
    </div>
  )
}
