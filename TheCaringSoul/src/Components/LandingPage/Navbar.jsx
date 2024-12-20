import { useState, useEffect } from "react"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"


export default function Navbar(){
  const navigate = useNavigate()
    return (
      <div className="navbar z-10 absolute top-0 bg-opal/20 uppercase font-medium text-black/70">
  <div className="navbar-start w-full ml-6 lg:w-36">
    
    <img src={logo} className="w-20 h-8" alt="" />
  </div>
  <div className="navbar-start ml-6 text-black/55 hidden lg:flex">
    <ul className="menu menu-horizontal flex flex-row gap-14 px-1">
      <div className="cursor-pointer bg-transparent hover:text-black">home </div>
      <div className="cursor-pointer bg-transparent hover:text-black">about </div>
      <div className="cursor-pointer bg-transparent hover:text-black">services </div>
      <div className="cursor-pointer bg-transparent hover:text-black">faq </div>
    </ul>
  </div>
  <div className="navbar-end   mr-4">
  <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className=" lg:hidden">
      
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="  stroke-current cursor-pointer bg-slateblue rounded-md w-8 h-8 text-white">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
   
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content flex flex-col gap-2  w-28 text-black/55 rounded-sm z-[1] mt-3  p-2 shadow">
        <div className="cursor-pointer bg-transparent hover:text-black">home </div>
      <div className="cursor-pointer bg-transparent hover:text-black">about </div>
      <div className="cursor-pointer bg-transparent hover:text-black">services </div>
      <div className="cursor-pointer bg-transparent hover:text-black">faq </div>
      </ul>
    </div>
    <div className="flex-row lg:flex hidden gap-5 justify-center align-middle">
         <div className="self-center text-black/55 cursor-pointer" >contact us</div>
         <div onClick={()=>{navigate("/login")}} className="text-white font-extrabold cursor-pointer bg-buttoncolor p-2 self-center text-center w-28 rounded-full">log in</div>
    </div>
  </div>
</div>
    )
}