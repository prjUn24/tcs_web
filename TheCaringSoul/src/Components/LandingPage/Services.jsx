import React from 'react'
import image1 from "../../assets/services/card1.png"
import image2 from "../../assets/services/card2.png"
import image3 from "../../assets/services/card3.png"
import image4 from "../../assets/services/card4.png"
import image5 from "../../assets/services/card5.png"
import bgimg1 from "../../assets/services/bg1.png"
import bgimg2 from "../../assets/services/bg2.png"


export default function Services() {
  return (
    <div className=" relative z-10 bg-amour lg:bg-transparent">

      {/* bg cloudimage */}
      
      <img src={bgimg2} alt="" className='absolute top-40 left-0 w-[20rem] h-[40rem] hidden lg:block -z-10 hidden sm:block' />
      <img src={bgimg1} alt="" className='absolute top-0 right-0 w-[20rem] h-[40rem] hidden lg:block -z-10 hidden sm:block' />
      
      
      
      <h2 className="text-4xl sm:text-6xl text-slateblue font-bold text-center pt-[100px] pb-[30px]">
        <span className="hidden sm:block">Our Services</span>
        <span className="block sm:hidden">SERVICES</span>
      </h2>
      


      <h3 className="text-4xl sm:text-4xl text-steel text-center">
        <span className="hidden sm:block">
          Comprehensive Home Care Services Designed Just for You
        </span>
        <span className="block sm:hidden ">
          Our top value categories for you
        </span>
      </h3>


      <div className="text-center pt-[30px] hidden sm:block"><h4>Explore Our Range of Personalized Care Services</h4></div>

      {/* Horizontal Scrolling Cards */}
      <div className="flex flex-col sm:flex-row sm:overflow-x-auto space-y-6 sm:space-y-0 sm:space-x-10 pt-[100px] pb-[100px] px-[40px] scroll-smooth">
        {/* Card 1 */}
        <div className="bg-white shadow-2xl rounded-lg p-6 flex-shrink-0 w-full sm:w-80 flex flex-col items-center group transition-all duration-300 border border-cloudbyblue hover:border-transparent hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
          <img src={image1} alt="Icon 1" className="mb-4 w-12 h-12 mt-[30px]" />
          <h3 className="text-xl font-bold text-slateblue text-center mb-4">In-Home Nursing Care</h3>
          <p className="text-gray-700 text-center mb-4">
            Skilled nursing care for medical needs like wound dressing, injections, and monitoring.
          </p>
          <button className="bg-white text-gumleaf font-bold py-2 px-4 mt-[40px] rounded group-hover:bg-[blue] transition-all duration-500">
            Enquire Now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-2xl rounded-lg p-6 flex-shrink-0 w-full sm:w-80 flex flex-col items-center group transition-all duration-300 border border-cloudbyblue hover:border-transparent hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
          <img src={image2} alt="Icon 2" className="mb-4 w-9 h-12 mt-[30px]" />
          <h3 className="text-xl font-bold text-slateblue text-center mb-4">Personal Care Assistance</h3>
          <p className="text-gray-700 text-center mb-4">
            Help with daily living activities like bathing, grooming, and meal preparation.
          </p>
          <button className="bg-white text-gumleaf font-bold py-2 px-4 mt-[40px] rounded group-hover:bg-[blue] transition-all duration-500">
            Enquire Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-2xl rounded-lg p-6 flex-shrink-0 w-full sm:w-80 flex flex-col items-center group transition-all duration-300 border border-cloudbyblue hover:border-transparent hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
          <img src={image3} alt="Icon 1" className="mb-4 w-12 h-12 mt-[30px]" />
          <h3 className="text-xl font-bold text-slateblue text-center mb-4">Physical Therapy Support</h3>
          <p className="text-gray-700 text-center mb-4">Recover and regain mobility with personalized physiotherapy sessions.</p>
          <button className="bg-white text-gumleaf font-bold py-2 px-4 mt-[65px] rounded group-hover:bg-[blue] transition-all duration-500">
            Enquire Now
          </button>
        </div> 

        {/* Card 4 */}
        <div className="bg-white shadow-2xl rounded-lg p-6 flex-shrink-0 w-full sm:w-80 flex flex-col items-center group transition-all duration-300 border border-cloudbyblue hover:border-transparent hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
          <img src={image4} alt="Icon 1" className="mb-4 w-12 h-12 mt-[30px]" />
          <h3 className="text-xl font-bold text-slateblue text-center mb-4">Medication Management</h3>
          <p className="text-gray-700 text-center mb-4">Ensure timely and accurate medication administration for optimal health.</p>
          <button className="bg-white text-gumleaf font-bold py-2 px-4 mt-[40px] rounded group-hover:bg-[blue] transition-all duration-500">
            Enquire Now
          </button>
        </div>


        {/* Card 5 */}
        <div className="bg-white shadow-2xl rounded-lg p-6 flex-shrink-0 w-full sm:w-80 flex flex-col items-center group transition-all duration-300 border border-cloudbyblue hover:border-transparent hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
          <img src={image5} alt="Icon 5" className="mb-4 w-10 h-12 mt-[30px]" />
          <h3 className="text-xl font-bold text-slateblue text-center mb-4">Companion Care</h3>
          <p className="text-gray-700 text-center mb-4">
            Alleviating loneliness and providing emotional support to your loved ones.
          </p>
          <button className="bg-white text-gumleaf font-bold py-2 px-4 mt-[40px] rounded group-hover:bg-[blue] transition-all duration-500">
            Enquire Now
          </button>
        </div>
      </div>

      
      

      
    </div>
  )
}


