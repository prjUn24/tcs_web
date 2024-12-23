import React, { useState } from 'react';
import PropTypes from 'prop-types';

const OtpVerificationSignUp = ({ isOpen, onClose, onVerify }) => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 6) {
            setOtp(value);
            setError(''); 
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otp.length === 6) { 
            onVerify(otp); 
        } else {
            setError('Please enter a valid 6-digit OTP.'); 
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-bold mb-4">OTP Verification</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={otp}
                        onChange={handleChange}
                        placeholder="Enter OTP"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                        maxLength={6}
                    />
                    {error && <div className="text-red-500 mt-2">{error}</div>} 
                    <div className="flex justify-between mt-4">
                        <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

OtpVerificationSignUp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired, 
    onVerify: PropTypes.func.isRequired, 
};

export default OtpVerificationSignUp;
