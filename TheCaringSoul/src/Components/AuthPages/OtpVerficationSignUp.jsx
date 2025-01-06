import React, { useState } from 'react';
import PropTypes from 'prop-types';

// OtpVerificationSignUp.js
 function OtpVerificationSignUp({ isOpen, onClose, onVerify }) {
    const [otp, setOtp] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onVerify(otp); // Call the onVerify function passed as prop
        onClose(); // Close the popup after submitting
    };

    if (!isOpen) return null; // Don't render anything if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter OTP" 
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                        className="w-full p-2 border border-gray-300 rounded mb-4"
                        required
                    />
                    <button type="submit" className="w-full bg-green-400 hover:bg-green-500 text-white p-2 rounded">
                        Verify
                    </button>
                </form>
                <button onClick={onClose} className="mt-2 text-red-500">Cancel</button>
            </div>
        </div>
    );
}

OtpVerificationSignUp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired, 
    onVerify: PropTypes.func.isRequired, 
};

export default OtpVerificationSignUp;
