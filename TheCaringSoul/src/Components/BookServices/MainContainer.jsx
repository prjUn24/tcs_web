import React, { useEffect, useState } from 'react';
import './custom.css';
import image from "../../assets/About/vector-heart-2.png";
import ConfirmServiceBooking from "./ConfirmServiceBooking";
import { initializeAuthListener } from '../Firebase/Authentication';
import { getUserByEmail } from '../Firebase/Database';
import {createService} from "../Firebase/Services"
import { useNavigate } from 'react-router-dom';

export default function ServiceContainer() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()
  const [message, setMessage] = useState({
    error: null,
    resolved: null,
  });
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    otp: '',
    email: '',
    address: '',
    consultaion: '',
    someone: false,
    availability: '',
    weeks: '',
    months: '',
    caregivergender: '',
    language: '',
    otpsent: false,
    number: ''
  });

  const [availabilityClickedIndex, setAvailabilityClickedIndex] = useState(null);
  const [weeksClickedIndex, setWeeksClickedIndex] = useState(null);
  const [monthsClickedIndex, setMonthsClickedIndex] = useState(null);
  const [loggedin, setLoggedIn] = useState({ status: false, data: [] });

  useEffect(() => {
    const unsubscribe = initializeAuthListener(async (authUser) => {
      if (authUser) {
        setUser(authUser);
        setLoggedIn({ status: true, data: authUser });
        
        try {
          const userData = await getUserByEmail(authUser.email);
          if (userData) {
            setFormData(prevData => ({
              ...prevData,
              firstname: userData.firstname || '',
              lastname: userData.lastname || '',
              email: authUser.email,
              address: userData.address || '',
              number: userData.number || ''
            }));
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
        setLoggedIn({ status: false, data: [] });
        setFormData(prevData => ({
          ...prevData,
          firstname: '',
          lastname: '',
          email: '',
          address: '',
          number: ''
        }));
      }
    });

    return () => unsubscribe();
  }, []);

  const availability = ['Immediately', 'within 2 weeks', 'within 1 month'];
  const week = ['1-10 hours', '10 - 20 hours', '20+ hours'];
  const month = ['1-4 weeks', '1-6 months', '6+ months'];

  const handleForm = async (e) => {
    e.preventDefault();

    // Check if OTP has already been sent
 

    // Validate form data
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.address || !formData.availability || !formData.weeks || !formData.months) {
        return setMessage("Please fill all fields");
    }

    try {
        // Create service and wait for confirmation
        await createService(formData, setMessage, message);
        
        // After creating service, update otpsent state
        setFormData(prevData => ({ ...prevData, otpsent: true }));
        // Debugging: Log to confirm state change
        console.log("OTP sent state updated to true:", formData.otpsent);
    } catch (error) {
        console.error("Error creating service:", error);
        setMessage({ ...message, error: "Failed to create service." });
    }
};

  const handleOptionClick = (val, type) => {
    if (type === 'availability') {
      setAvailabilityClickedIndex(availability.indexOf(val));
      setFormData((prevState) => ({ ...prevState, availability: val }));
    } else if (type === 'weeks') {
      setWeeksClickedIndex(week.indexOf(val));
      setFormData((prevState) => ({ ...prevState, weeks: val }));
    } else if (type === 'months') {
      setMonthsClickedIndex(month.indexOf(val));
      setFormData((prevState) => ({ ...prevState, months: val }));
    }
  };
  console.log(formData.otpsent)
  if(formData.otpsent){
    return <ConfirmServiceBooking/>
  }
  return (
    <div className='hero lg:p-10 bg-amour/40 relative text-slateblue p-3 md:p-5 w-full justify-items-center font-medium'>
      <img src={image} className='absolute top-2 left-6 w-16 h-16' alt="" />
      <img src={image} className='absolute top-2/3 left-6 w-16 h-16' alt="" />
      <img src={image} className='absolute -right-6 bottom-6 w-16 h-16' alt="" />
      <img src={image} className='absolute -right-6 bottom-3/5 w-16 h-16' alt="" />
      
      <form className='relative md:scale-110 lg:w-3/5 w-full md:mt-36 mt-24 z-20 p-2' onSubmit={handleForm}>
        {/* Name Section */}
        <div className='border p-3 shadow-md bg-white/80 rounded-md'>
          <label className={`${loggedin.status ? 'text-black/60' : 'text-blacks'} font-semibold`}>
            Please Enter Your Name
          </label>
          {loggedin.status ? (
            <div className='flex flex-row gap-2 p-2 mt-4'>
              <div>{formData.firstname}</div>
              <div>{formData.lastname}</div>
            </div>
          ) : (
            <div className='flex md:flex-row md:gap-5 gap-2 pl-0 lg:gap-10 flex-col w-full p-10 align-middle'>
              <input
                type="text"
                className='p-1 pl-2 bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
                placeholder='John'
                value={formData.firstname}
                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                required
              />
              <input
                type="text"
                className='p-1 pl-2 bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
                placeholder='Smith'
                value={formData.lastname}
                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                required
              />
            </div>
          )}
        </div>

        {/* Care Needs Section */}
        <div className='mt-6 border shadow-md bg-white/80 p-3 rounded-md'>
          <label className='font-semibold'>Care Needs</label>
          <div className='flex flex-col w-full p-2'>
            <div className='mt-6'>How soon will you need help?</div>
            <div className='option-container flex bg-gray-100 rounded flex-row justify-center align-middle lg:gap-24 mt-4 p-5 pl-2 gap-5'>
              {availability.map((val, idx) => (
                <div
                  key={idx}
                  className={`text-xs lg:text-md w-full ${idx === 0 ? 'first' : 'option'} ${formData.availability === val ? 'active' : ''} ${availabilityClickedIndex === idx ? 'clicked-left' : ''}`}
                  onClick={() => handleOptionClick(val, 'availability')}
                >
                  <span>{val}</span>
                </div>
              ))}
              <div className='slider' style={{ left: `${availabilityClickedIndex !== null ? availabilityClickedIndex * (100 / availability.length) : 0}%` }}></div>
            </div>

            <div className='mt-6'>How much help will the person need in each week?</div>
            <div className='option-container2 flex bg-gray-100 rounded flex-row justify-center align-middle lg:gap-24 mt-4 p-5 pl-2 gap-5'>
              {week.map((val, idx) => (
                <div
                  key={idx}
                  className={`text-xs lg:text-md w-full ${idx === 0 ? 'first' : 'option2'} ${formData.weeks === val ? 'active' : ''} ${weeksClickedIndex === idx ? 'clicked-left' : ''}`}
                  onClick={() => handleOptionClick(val, 'weeks')}
                >
                  <span>{val}</span>
                </div>
              ))}
              <div className='slider' style={{ left: `${weeksClickedIndex !== null ? weeksClickedIndex * (100 / week.length) : 0}%` }}></div>
            </div>

            <div className='mt-6'>How long will the person need help?</div>
            <div className='option-container3 flex bg-gray-100 rounded flex-row justify-center align-middle lg:gap-24 mt-4 p-5 pl-2 gap-5'>
              {month.map((val, idx) => (
                <div
                  key={idx}
                  className={`text-xs lg:text-md w-full ${idx === 0 ? 'first' : 'option3'} ${formData.months === val ? 'active' : ''} ${monthsClickedIndex === idx ? 'clicked-left' : ''}`}
                  onClick={() => handleOptionClick(val, 'months')}
                >
                  <span>{val}</span>
                </div>
              ))}
              <div className='slider' style={{ left: `${monthsClickedIndex !== null ? monthsClickedIndex * (100 / month.length) : 0}%` }}></div>
            </div>
          </div>
        </div>

        {/* Address Details Section */}
        <div className='border shadow-md bg-white/80 p-3 rounded-md mt-6 flex flex-col'>
          <label className='font-semibold'>Address Details</label>
          {loggedin.status ? (
            <div className='p-2 mt-4'>{formData.email}</div>
          ) : (
            <input
              type="email"
              value={formData.email}
              onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
              placeholder='E-mail'
              className='p-2 mt-4 bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
              required
            />
          )}
          <textarea
            value={formData.address}
            onChange={(e) => { setFormData({ ...formData, address: e.target.value }) }}
            placeholder='Full Address'
            className='p-2 mt-4 bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
            rows={4}
            required
          />
          <textarea
            value={formData.consultaion}
            onChange={(e) => { setFormData({ ...formData, consultaion: e.target.value }) }}
            className='mt-6 p-1 pl-2 bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
            placeholder='Consultation'
            rows={4}
            required
          />
          <div className='mt-4 flex flex-row gap-5'>
            <input
              type="checkbox"
              checked={formData.someone}
              onChange={() => setFormData({ ...formData, someone: !formData.someone })}
              className="checkbox text-slateblue"
            />
            <div>I am seeking care for someone else</div>
          </div>
            {message.error != null ? <div className='w-full text-center text-red-400'>{message.error}</div> : ''}
          <input
            required
            type="tel"
            name="number"
            value={formData.number}
            onChange={(e) => { setFormData({ ...formData, number: e.target.value }) }}
            className='w-full mt-4 p-3 bg-amber-50/50 border border-gray-300 rounded focus:outline-none focus:border-gray-400'
            pattern="^\d{10}$"
            maxLength={10}
            placeholder='Phone number'
          />

         {formData.otpsent ? <div   className='mt-4 ml-2 mb-4 self-center text-center bg-green-400 text-white p-2 rounded-md w-36'>
            Booked
          </div> :  <button onClick={(e)=>{handleForm(e)}}  className='mt-4 ml-2 mb-4 self-center text-center bg-green-400 text-white p-2 rounded-md w-36'>
            Book Service
          </button> } 

        </div>
      </form>

    </div>
  );
}