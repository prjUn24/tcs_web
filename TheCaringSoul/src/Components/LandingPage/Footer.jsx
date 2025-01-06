import React from 'react';
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { Link, Router } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="text-[#666666] md:text-white px-8 py-8 bg-[#F8E8F5] bg-[url('/src/assets/FAQ_mobilebg.png')] md:bg-[url('/src/assets/Footer/Footer-background.png')] bg-left bg-no-repeat bg-cover">
      <div className='sm:m-10 md:m-20'>
        <div className="container  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-[320px]">
          {/* TCS Section */}
          <div className="">
            <img src={logo} alt="TCS Logo" width="" className="mb-4 w-40" />
            <div className="flex space-x-4">
              <a href="#" className="">
                <FaFacebook className="w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9] hover:text-blue-400" />
              </a>
              <a href="#" className="">
                <AiFillInstagram className="w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9] hover:text-pink-400" />
              </a>
              <a href="#" className="">
                <RiTwitterXLine className="w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9] hover:text-[#111111]" />
              </a>
              <a href="#" className="">
                <IoLogoWhatsapp className="w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9] hover:text-green-500" />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="flex-col ">
            <h1 className="font-black mb-4 text-2xl text-[#567A9B] md:text-[#fff]">About</h1>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <CiLocationOn size={25} className="text-[#111]" />
                <h2 className="font-bold">Chennai, India</h2>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <MdOutlinePhone size={25} className="text-[#111]" />
                <h2 className="font-bold">+91 987654321</h2>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <CiClock2 size={25} className="text-[#111]" />
                <h2 className="font-bold">Mon - Sun: 8AM - 8PM</h2>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className=''>
            <h1 className=" font-black mb-4 text-2xl text-[#567A9B] md:text-[#fff]">Quick Links</h1>
            <ul className="space-y-2">
              <li>
                <Link to='' className="font-bold">Book Appointment</Link>
              </li>
              <li>
                <Link to='/services' className="font-bold">Home Care Services</Link>
              </li>
              <li>
                <Link to='/about-us' className="font-bold">About Us</Link>
              </li>
              <li>
                <Link to='/faq' className="font-bold">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className=''>
            <h1 className="font-black mb-4 text-2xl text-[#567A9B] md:text-[#fff]">Newsletter</h1>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-4 py-2 rounded bg-[#202638] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4 text-xl"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#69858C] hover:bg-blue-600 text-white rounded w-3/4 font-black text-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10 text-[#567A9B] md:text-[#fff]">
          <p>©{currentYear} Caring Souls, Inc. All Rights Reserved. Each Caring Souls franchise is independently owned and operated.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
