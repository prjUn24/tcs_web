import React, { useState } from 'react';
import './custom.css'; 


import image from  "../../assets/About/vector-heart-2.png"

export default function ServiceContainer() {
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
    otpsent: true,
    number: ''
  });

  const [availabilityClickedIndex, setAvailabilityClickedIndex] = useState(null);
  const [weeksClickedIndex, setWeeksClickedIndex] = useState(null);
  const [monthsClickedIndex, setMonthsClickedIndex] = useState(null);
  const [loggedin, setLoggedIn] = useState({ status: false, data: [] });

  const availability = ['Immediately', 'within 2 weeks', 'within 1 month'];
  const week = ['1-10 hours', '10 - 20 hours', '20+ hours'];
  const month = ['1-4 weeks', '1-6 months', '6+ months'];

  const handleForm = (e) => {
    e.preventDefault();
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

  return (
    <div className='hero lg:p-10 bg-amour/40 relative text-slateblue p-3 md:p-5 w-full justify-items-center font-medium'>

      <img src={image} className='absolute top-2 left-6 w-16 h-16' alt="" />
      <img src={image} className='absolute top-2/3 left-6 w-16 h-16' alt="" />
      <img src={image} className='absolute -right-6 bottom-6 w-16 h-16' alt="" />
      <img src={image} className='absolute -right-6 bottom-3/5 w-16 h-16' alt="" />
      <form className='relative md:scale-110 lg:w-3/5 w-full md:mt-36 mt-24 z-20 p-2' onSubmit={handleForm}>
        <div className='border p-3 shadow-md bg-white/80 rounded-md'>
          <label className={`${loggedin.status ? 'text-black/60' : 'text-blacks'} font-semibold`}>
            Please Enter Your Name
          </label>
          {loggedin.status ? (
            <div className='flex flex-row gap-2 p-2 mt-4'>
              <div>first Name</div>
              <div>last name</div>
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

        <div className='mt-6 border shadow-md bg-white/80 p-3 rounded-md'>
          <label className='font-semibold'>Care Needs</label>
          <div className='flex flex-col w-full p-2'>
            <div className='mt-6'>How soon will you need help?</div>
            <div className='option-container flex bg-gray-100 rounded flex-row justify-center align-middle lg:gap-24 mt-4 p-5 pl-2 gap-5'>
              {availability.map((val, idx) => {
                return (
                  <div
                    key={idx}
                    className={`text-xs lg:text-md w-full ${idx === 0 ? 'first' : 'option'} ${formData.availability === val ? 'active' : ''} ${availabilityClickedIndex === idx ? 'clicked-left' : ''}`}
                    onClick={() => handleOptionClick(val, 'availability')}
                  >
                    <span>{val}</span>
                  </div>
                );
              })}
              <div className='slider' style={{ left: `${availabilityClickedIndex !== null ? availabilityClickedIndex * (100 / availability.length) : 0}%` }}></div>
            </div>

            <div className='mt-6'>How much help will the person need in each week?</div>
            <div className='option-container2 flex bg-gray-100 rounded flex-row justify-center align-middle lg:gap-24 mt-4 p-5 pl-2 gap-5'>
              {week.map((val, idx) => {
                return (
                  <div
                    key={idx}
                    className={`text-xs lg:text-md w-full ${idx === 0 ? 'first' : 'option2'} ${formData.weeks === val ? 'active' : ''} ${weeksClickedIndex === idx ? 'clicked-left' : ''}`}
                    onClick={() => handleOptionClick(val, 'weeks')}
                  >
                    <span>{val}</span>
                  </div>
                );
              })}
              <div className='slider' style={{ left: `${weeksClickedIndex !== null ? weeksClickedIndex * (100 / week.length) : 0}%` }}></div>
            </div>

            <div className='mt-6'>How long will the person need help?</div>
            <div className='option-container3 flex bg-gray-100 rounded flex-row justify-center align-middle lg:gap-24 mt-4 p-5 pl-2 gap-5'>
              {month.map((val, idx) => {
                return (
                  <div
                    key={idx}
                    className={`text-xs lg:text-md w-full ${idx === 0 ? 'first' : 'option3'} ${formData.months === val ? 'active' : ''} ${monthsClickedIndex === idx ? 'clicked-left' : ''}`}
                    onClick={() => handleOptionClick(val, 'months')}
                  >
                    <span>{val}</span>
                  </div>
                );
              })}
              <div className='slider' style={{ left: `${monthsClickedIndex !== null ? monthsClickedIndex * (100 / month.length) : 0}%` }}></div>
            </div>
          </div>
        </div>

        <div className='border shadow-md bg-white/80 p-3 rounded-md mt-6 flex flex-col'>
          <label className='font-semibold'>Address Details</label>
          {loggedin.status ? (
            <div className='p-2 mt-4'> Email </div>
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
        </div>

        <div className='mt-12 border shadow-md bg-white/80 p-3 rounded-md p-5'>
          <label className='font-semibold'>Phone Verification</label>
          <p className='mt-4 p-3'>
            We&apos;ll send you a verification code via SMS to confirm your phone number.<br />
            This helps us ensure your account security.
          </p>

          <input
  type="tel"
  className='w-56 ml-4 h-16 p-1 pl-2 text-center bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
  pattern="^\d{10}$"
  maxLength={10}
  placeholder='Phone number'
  value={formData.number}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setFormData({ ...formData, number: value });
    }
  }}
  required
/>

          <div className='mt-4'>
            {formData.otpsent ? (
              <div className='flex flex-col gap-3 w-full'>
                  <input
  type="tel"
  className='w-56 h-16 ml-4 p-1 pl-2 text-center bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
  pattern="^\d{4}$"
  maxLength={4}
  placeholder='OTP'
  value={formData.otp}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 4) {
      setFormData({ ...formData, otp: value });
    }
  }}
  required
/>
              <div className='w-full flex p-5 flex-row gap-5'>
                <div className='bg-green-400 text-white p-2 rounded pl-3 pr-3 cursor-pointer'>Resend otp</div>
                <div className='bg-green-400 text-white p-2 rounded pl-3 pr-3 cursor-pointer' onClick={handleForm}>Submit</div>
              </div>
              </div>
            ) : 
              <button className='bg-green-400 text-white p-2 rounded pl-3 pr-3'>Send Code</button>
            }
          </div>
        </div>
      </form>
    </div>
  );
}
