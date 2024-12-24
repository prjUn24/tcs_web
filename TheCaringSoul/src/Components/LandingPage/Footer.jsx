// // Footer.jsx
// import React from 'react';
// import logo from "../../assets/logo.png"
// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {/* TCS Section */}
//         <img src={logo} alt="" width='100'/>

//         {/* About Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">About</h3>
//           <p className="text-sm">
//             Learn more about our journey, vision, and the services we provide to transform your business.
//           </p>
//         </div>

//         {/* Quick Links Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:underline">Home</a></li>
//             <li><a href="#" className="hover:underline">Services</a></li>
//             <li><a href="#" className="hover:underline">Careers</a></li>
//             <li><a href="#" className="hover:underline">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Newsletter Section */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//           <p className="text-sm mb-4">
//             Subscribe to our newsletter to stay updated on the latest news and offers.
//           </p>
//           <form className="flex flex-col space-y-2">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from 'react';
// import logo from "../../assets/logo.png";
// import { FaFacebook } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { RiTwitterXLine } from "react-icons/ri";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlinePhone } from "react-icons/md";
// import { CiClock2 } from "react-icons/ci";

// const Footer = () => {
//   return (
//     <footer className="text-white px-8 py-8  bg-[url('/src/assets/Footer/Footer-background.png')] bg-center bg-no-repeat bg-cover ">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  mt-80">
//         {/* TCS Section */}
//         <div className="flex flex-col items-center">
//           <img src={logo} alt="TCS Logo" width="100" className="mb-4" />
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-blue-400">
//             <FaFacebook size={25} />
//             </a>
//             <a href="#" className="hover:text-pink-400">
//             <AiFillInstagram size={25}  />
//             </a>
//             <a href="#" className="hover:text-blue-500">
//             <RiTwitterXLine size={25} />
//             </a>
//             <a href="#" className="hover:text-green-500">
//             <IoLogoWhatsapp size={25}  />
//             </a>
//           </div>
//         </div>

//         {/* About Section */}
//         <div className='flex flex-col'>
//           <h1 className=" font-black mb-4 text-2xl">About</h1>
//           <div>
//           <div className="flex items-center space-x-2 mb-2 ">
//           <CiLocationOn size={25} className='text-[#111]'/>
//                <h2 className='font-bold'>Chennai, India</h2>
//            </div>
//            <div className="flex items-center space-x-2  mb-2">
//            <MdOutlinePhone size={25} className='text-[#111]'/>
//                <h2 className='font-bold'>+91 987654321</h2>
//            </div>
//            <div className="flex items-center space-x-2  mb-2">
//            <CiClock2 size={25} className='text-[#111]' />
//                <h2 className='font-bold'>Mon - Sun: 8AM - 8PM</h2>
//            </div>
          
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div>
//           <h1 className="font-black mb-4 text-2xl">Quick Links</h1>
//           <ul className="space-y-2">
//             <li><h2 className='font-bold'>Book Appointment</h2></li>
//             <li><h2 className='font-bold'>Home Care Services</h2></li>
//             <li><h2 className='font-bold'>About Us</h2></li>
          
//           </ul>
//         </div>

//         {/* Newsletter Section */}
//         <div>
//           <h1 className=" font-black mb-4 text-2xl">Newsletter</h1>
         
//           <form className="flex flex-col space-y-2">
//             <input
//               type="email"
//               placeholder="Enter your Email"
//               className="px-4 py-2 rounded bg-[#202638] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4 text-xl"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-[#69858C] hover:bg-blue-600 text-white rounded w-3/4 font-black text-xl"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React from 'react';
// import logo from "../../assets/logo.png";
// import { FaFacebook } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { RiTwitterXLine } from "react-icons/ri";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlinePhone } from "react-icons/md";
// import { CiClock2 } from "react-icons/ci";

// const Footer = () => {
//   return (
//     <footer className="text-white px-8 py-8 bg-[#F8E8F5] bg-[url('/src/assets/FAQ_mobilebg.png')] md:bg-[url('/src/assets/Footer/Footer-background.png')] bg-left bg-no-repeat bg-cover">
//   <div className='sm:m-10 md:m-20'>
//   <div className="container  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-[320px]">
//       {/* TCS Section */}
//       <div className="">
//         <img src={logo} alt="TCS Logo" width="" className="mb-4 w-40" />
//         <div className="flex space-x-4">
//           <a href="#" className="hover:text-blue-400">
//             <FaFacebook className='w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9]'  />
//           </a>
//           <a href="#" className="hover:text-pink-400">
//             <AiFillInstagram className='w-10 h-10 md:w-7 md:h-7 text-[#567A9B]  md:text-[#F5FAF9]' />
//           </a>
//           <a href="#" className="hover:text-blue-500">
//             <RiTwitterXLine className='w-10 h-10 md:w-7 md:h-7 text-[#567A9B]  md:text-[#F5FAF9]' />
//           </a>
//           <a href="#" className="hover:text-green-500">
//             <IoLogoWhatsapp className='w-10 h-10 md:w-7 md:h-7 text-[#567A9B]  md:text-[#F5FAF9]'  />
//           </a>
//         </div>
//       </div>
  
//       {/* About Section */}
//       <div className="hidden md:flex flex-col ">
//         <h1 className="font-black mb-4 text-2xl">About</h1>
//         <div>
//           <div className="flex items-center space-x-2 mb-2">
//             <CiLocationOn size={25} className="text-[#111]" />
//             <h2 className="font-bold">Chennai, India</h2>
//           </div>
//           <div className="flex items-center space-x-2 mb-2">
//             <MdOutlinePhone size={25} className="text-[#111]" />
//             <h2 className="font-bold">+91 987654321</h2>
//           </div>
//           <div className="flex items-center space-x-2 mb-2">
//             <CiClock2 size={25} className="text-[#111]" />
//             <h2 className="font-bold">Mon - Sun: 8AM - 8PM</h2>
//           </div>
//         </div>
//       </div>
  
//       {/* Quick Links Section */}
//       <div className='hidden md:block'>
//         <h1 className=" font-black mb-4 text-2xl">Quick Links</h1>
//         <ul className="space-y-2">
//           <li>
//             <a href='#' className="font-bold">Book Appointment</a>
//           </li>
//           <li>
//             <a href='#' className="font-bold">Home Care Services</a>
//           </li>
//           <li>
//             <a href='#' className="font-bold">About Us</a>
//           </li>
//         </ul>
//       </div>
  
//       {/* Newsletter Section */}
//       <div className='hidden md:block'>
//         <h1 className="font-black mb-4 text-2xl">Newsletter</h1>
//         <form className="flex flex-col space-y-2">
//           <input
//             type="email"
//             placeholder="Enter your Email"
//             className="px-4 py-2 rounded bg-[#202638] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4 text-xl"
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-[#69858C] hover:bg-blue-600 text-white rounded w-3/4 font-black text-xl"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>

//       {/* Mobile views */}
//       <div className='md:hidden'>
//         <h1>Meeran</h1>
//       </div>
//     </div>
//   </div>
//   </footer>
  
//   );
// };

// export default Footer;





// import React from 'react';
// import logo from "../../assets/logo.png";
// import { FaFacebook } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { RiTwitterXLine } from "react-icons/ri";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { CiLocationOn } from "react-icons/ci";
// import { MdOutlinePhone } from "react-icons/md";
// import { CiClock2 } from "react-icons/ci";
// import { Link, Router } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="text-[#111] md:text-white px-8 py-8 bg-[#F8E8F5] bg-[url('/src/assets/FAQ_mobilebg.png')] md:bg-[url('/src/assets/Footer/Footer-background.png')] bg-left bg-no-repeat bg-cover">
//   <div className='sm:m-10 md:m-20'>
//   <div className="container  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:mt-[320px]">
//       {/* TCS Section */}
//       <div className="">
//   <img src={logo} alt="TCS Logo" width="" className="mb-4 w-40" />
//   <div className="flex space-x-4">
//     <a href="#" className="">
//       <FaFacebook className="w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9] hover:text-blue-400" />
//     </a>
//     <a href="#" className="">
//       <AiFillInstagram className="w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9] hover:text-pink-400" />
//     </a>
//     <a href="#" className="">
//       <RiTwitterXLine className="w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9] hover:text-[#111111]" />
//     </a>
//     <a href="#" className="">
//       <IoLogoWhatsapp className="w-10 h-10 md:w-7 md:h-7 text-[#567A9B] md:text-[#F5FAF9] hover:text-green-500" />
//     </a>
//   </div>
// </div>
    
  
//       {/* About Section */}
//       <div className="flex-col ">
//         <h1 className="font-black mb-4 text-2xl text-[#567A9B] md:text-[#fff]">About</h1>
//         <div>
//           <div className="flex items-center space-x-2 mb-2">
//             <CiLocationOn size={25} className="text-[#111]" />
//             <h2 className="font-bold">Chennai, India</h2>
//           </div>
//           <div className="flex items-center space-x-2 mb-2">
//             <MdOutlinePhone size={25} className="text-[#111]" />
//             <h2 className="font-bold">+91 987654321</h2>
//           </div>
//           <div className="flex items-center space-x-2 mb-2">
//             <CiClock2 size={25} className="text-[#111]" />
//             <h2 className="font-bold">Mon - Sun: 8AM - 8PM</h2>
//           </div>
//         </div>
//       </div>
  
//       {/* Quick Links Section */}
//       <div className=''>
//         <h1 className=" font-black mb-4 text-2xl text-[#567A9B] md:text-[#fff]">Quick Links</h1>
//         <ul className="space-y-2">
//           <li>
//             <Link to='' className="font-bold">Book Appointment</Link>
//           </li>
//           <li>
//             <Link to='/services' className="font-bold">Home Care Services</Link>
//           </li>
//           <li>
//             <Link to='/about-us' className="font-bold">About Us</Link>
//           </li>
//         </ul>
//       </div>
  
//       {/* Newsletter Section */}
//       <div className=''>
//         <h1 className="font-black mb-4 text-2xl text-[#567A9B] md:text-[#fff]">Newsletter</h1>
//         <form className="flex flex-col space-y-2">
//           <input
//             type="email"
//             placeholder="Enter your Email"
//             className="px-4 py-2 rounded bg-[#202638] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-3/4 text-xl"
//           />
//           <button
//             type="submit"
//             className="px-4 py-2 bg-[#69858C] hover:bg-blue-600 text-white rounded w-3/4 font-black text-xl"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>

     
//     </div>
//   </div>
//   </footer>
  
//   );
// };

// export default Footer;



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
