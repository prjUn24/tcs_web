import React, { useState } from 'react';
import { forgotPassword } from '../Firebase/Authentication';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');
        setError('');

        try {
            const result = await forgotPassword(email);
            if (result.success) {
                setMessage('Password reset email has been sent.');
                setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
            } else {
                setError(result.error || 'Failed to send password reset email.');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full bg-amour hero h-screen flex justify-center align-middle relative p-3 md:p-5 lg:p-10">
            <form
                onSubmit={handleEmailSubmit}
                className="p-5 w-4/5 scale-110 text-sm md:text-md bg-white flex flex-col md:w-96 pl-7 pr-7 text-center rounded-xl shadow-xl self-center"
            >
                <h2 className="text-xl font-semibold mb-5">Forgot Password</h2>
                
                {message && (
                    <div className="p-3 bg-green-100 text-green-700 rounded-md mb-4 text-sm">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="p-3 bg-red-100 text-red-700 rounded-md mb-4 text-sm">
                        {error}
                    </div>
                )}

                <div className="flex flex-col gap-2 mb-4">
                    <label className="text-left font-medium">Email</label>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-1 pl-2 bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black"
                        disabled={isLoading}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-8 rounded bg-green-400/70 hover:bg-green-400 hover:text-white text-white/80 flex-inline p-2 font-bold disabled:opacity-50 disabled:cursor-not-allowe"
                >
                    {isLoading ? 'Sending...' : 'Send Reset Email'}
                </button>
            </form>
        </div>
    );
}
