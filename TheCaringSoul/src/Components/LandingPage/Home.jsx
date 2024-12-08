import React from 'react'
import image from  "../../assets/image.png"

import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className=' h-screen relative w-full     bg-amour p-1'>
     
      <div className='absolute  lg:flex hidden top-[60px] right-0'> <svg  width="657" height="299" viewBox="0 0 657 299" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.93035 -73.923C2.93035 -73.923 -11.8567 -24.392 25.0033 7.372C61.8633 39.136 116.896 53.777 141.188 99.377C165.48 144.977 173.598 175.345 224.205 190.42C274.812 205.495 384.889 189.468 439.123 190.42C493.357 191.372 555.866 285.053 627.955 296.251C700.044 307.449 775.066 269.877 775.066 269.877V-75L2.93035 -73.923Z" fill="#A7C9D3"/>
</svg></div>

      <div className='w-full z-0  lg:text-left text-center mt-20 md:mt-36  2xl:mt-40 p-5'>
       <div className='flex flex-col pl-5 '>
        <div className='flex flex-row  justify-evenly w-full relative pr-5'>
        <div className='w-full font-bold text-3xl md:text-5xl text-slateblue md:text-black  lg:text-6xl'>Welcome to <br className='flex md:hidden' /> <span className='md:text-slateblue text-cloudbyblue'>The</span> <span className='md:text-slateblue text-gumleaf'>Caring</span> <span className='md:text-slateblue text-cloudbyblue'>Souls </span>  <br  />
            Compassionate Care,  <br />
            Right at Your Doorstep
       </div>

       <div className='relative hidden xl:flex -mt-12'>
       <div className='w-96 absolute z-30 right-12  -top-3 '>
                <img src={image} className='h-96 w-96' alt="" />
          </div>
          <div className='w-96 absolute z-30 right-20  -top-16 '>
                <img src={image} className='h-96 ' alt="" />
          </div>
      
       </div>
       
        </div>
        <div className='mt-6 w-full flex justify-center align-middle lg:hidden'>
              <img src={image} className='w-80 h-62' alt="" />
        </div>
       <div className='mt-12 text-xl text-slateblue/60 md:text-slateblue md:font-regular font-medium '>
        Enhancing Lives with Trusted Home Care  <br className='hidden md:flex'/> Services for <span className='md:underline md:underline-offset-8 decoration-4'>Your Loved Ones</span>
       </div>

       <div className='mt-12 flex flex-col lg:flex-row text-center  items-center justify-center align-middle lg:w-96 lg:justify-start  gap-2'>
        <div className='flex flex-row justify-center align-middle gap-2 w-36 text-center bg-slateblue text-white  p-2 rounded-md cursor-pointer'>Book Now <FaArrowRightLong className='self-center'/> </div>
        <div className='flex-inline w-36 text-center text-slateblue bg-transparent font-medium border-slateblue border-2   p-2 rounded-md'>More Info</div>
       </div>
       </div>
       </div>
    </div>
  )
}
