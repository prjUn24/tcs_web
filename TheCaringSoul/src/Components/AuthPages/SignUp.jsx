import React, { useState } from 'react'

export default function SignUp() {
    const [register, setRegister] = useState({firstname:'',
                                              lastname: '',
                                              number: '',
                                              address: '',
                                              email: '',
                                              password: '',
                                              repassword: '',

    })


    const formhandle =(e) =>{
        e.preventDefault()
    }
  return (
    <div className='w-full bg-amour hero h-screen flex justify-center align-middle relative p-3 md:p-5 lg:p-10'>
        

    <form onSubmit={(e)=>{formhandle(e)}} className='p-5 scale-110 w-96 text-sm md:text-md bg-white flex flex-col gap-3 md:w-96 pl-7 pr-7 text-center rounded-xl shadow-xl  self-center '  >
        <div className='w-full text-left font-bold text-2xl'>Registartion</div>
        <input required type="text" placeholder='first name' className='w-full p-1 pl-2  bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black' />
        <input required type="text" placeholder='last name' className='w-full p-1 pl-2  bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black' />
        <input required
  type="tel"
  className='w-full p-1 pl-2 text-left bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
  pattern="^\d{10}$"
  maxLength={10}
  placeholder='Phone number'
  value={register.number}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setRegister({ ...register, number: value });
    }
  }}
  
/>
<textarea
            value={register.address}
            onChange={(e) => { setRegister({ ...register, address: e.target.value }) }}
            
            className='mt-6 p-1 pl-2 bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
            placeholder='address'
            rows={4}
            required
          />
          <input required type="email" name="" placeholder='email' id="" className='w-full p-1 pl-2  bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'/>
          <input required type="password" placeholder='password' name="" id="" className='w-full p-1 pl-2  bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'/>
          <input required type="password" placeholder='re-type password' name="" id="" className='w-full p-1 pl-2  bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'/>


          <button type='submit' className='mt-4 rounded bg-green-400/70 hover:bg-green-400 hover:text-white text-white/80 flex-inline p-2  font-bold'>Sign up</button>

      
    </form>
  
</div>
  )
}
