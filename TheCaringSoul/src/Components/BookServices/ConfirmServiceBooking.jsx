import React, { useState } from "react";
import { confirmBooking } from "../Firebase/Services";
import { useNavigate } from "react-router-dom";
const ConfirmServiceBooking = () => {
  const [bookingCode, setBookingCode] = useState("");
  const navigate = useNavigate()
  const [message, setMessage] = useState({
    error: null,
    resolved: null,
  });

  const handleConfirm = async () => {
    if (!bookingCode) {
      setMessage({ error: "Please enter a booking code", resolved: null });
      return;
    }

    try {
      console.log(bookingCode)
      await confirmBooking(bookingCode, setMessage, message);
      navigate("/show/service")
    } catch (error) {
      setMessage({ error: error.message, resolved: null });
    }
  };

  return (
    <div className="flex flex-col w-full h-screen  items-center justify-center  ">
      <div className="bg-white p-8 rounded  max-w-md w-full">
        <h2 className="text-md text-slateblue font-bold  mb-4">Confirm Booking</h2>
        {message.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {message.error}
          </div>
        )}
        {message.resolved && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {message.resolved}
          </div>
        )}
        <input
          type="text"
          value={bookingCode}
          onChange={(e) => setBookingCode(e.target.value)}
          placeholder="Enter Booking Code"
          className="w-full p-2 mt-4 mb-4 bg-amber-50/50 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
        />
        <button
          onClick={handleConfirm}
          className="w-full bg-green-400 text-white py-2 rounded hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default ConfirmServiceBooking;