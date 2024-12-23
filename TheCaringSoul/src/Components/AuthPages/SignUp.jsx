import React, { useState } from 'react';
import { signup } from '../Firebase/Authentication';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        firstname: '',
        lastname: '',
        number: '',
        address: '',
        email: '',
        password: '',
        repassword: '',
    });

    const [message, setMessage] = useState({
        resolved: null,
        error: null
    });

    const [isLoading, setIsLoading] = useState(false);

    const formHandle = (e) => {
        const { name, value } = e.target;
        setRegister((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (register.password !== register.repassword) {
            setMessage({ error: 'Passwords do not match.', resolved: null });
            return;
        }

        setIsLoading(true);
        try {
            const result = await signup(register);
            
            if (result.success) {
                setMessage({
                    resolved: result.message,
                    error: null
                });
                // Redirect to login page after 3 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                setMessage({
                    error: result.error || 'An error occurred during signup',
                    resolved: null
                });
            }
        } catch (error) {
            setMessage({
                error: error.message || 'An unexpected error occurred',
                resolved: null
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='w-full bg-amour min-h-screen flex justify-center items-center relative p-3 md:p-5 lg:p-10'>
            <form onSubmit={handleSubmit} className='p-5 w-full max-w-md text-sm md:text-md bg-white flex flex-col gap-3 px-7 text-center rounded-xl shadow-xl'>
                <h2 className='w-full text-left font-bold text-2xl mb-4'>Registration</h2>

                <input
                    required
                    type="text"
                    placeholder='First Name'
                    name="firstname"
                    value={register.firstname}
                    onChange={formHandle}
                    className='w-full p-3 bg-amber-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400'
                />

                <input
                    required
                    type="text"
                    placeholder='Last Name'
                    name="lastname"
                    value={register.lastname}
                    onChange={formHandle}
                    className='w-full p-3 bg-amber-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400'
                />

                <input
                    required
                    type="tel"
                    name="number"
                    value={register.number}
                    onChange={formHandle}
                    className='w-full p-3 bg-amber-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400'
                    pattern="^\d{10}$"
                    maxLength={10}
                    placeholder='Phone number'
                />

                <textarea
                    name="address"
                    value={register.address}
                    onChange={formHandle}
                    className='w-full p-3 bg-amber-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400'
                    placeholder='Address'
                    rows={4}
                />

                <input
                    required
                    type="email"
                    name="email"
                    value={register.email}
                    onChange={formHandle}
                    placeholder='Email'
                    className='w-full p-3 bg-amber-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400'
                />

                <input
                    required
                    type="password"
                    name="password"
                    value={register.password}
                    onChange={formHandle}
                    placeholder='Password'
                    className='w-full p-3 bg-amber-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400'
                    minLength={6}
                />

                <input
                    required
                    type="password"
                    name="repassword"
                    value={register.repassword}
                    onChange={formHandle}
                    placeholder='Re-type Password'
                    className='w-full p-3 bg-amber-50 border border-gray-300 rounded focus:outline-none focus:border-gray-400'
                    minLength={6}
                />

                <button
                    type='submit'
                    disabled={isLoading}
                    className='mt-4 rounded bg-green-400 hover:bg-green-500 disabled:bg-green-300 disabled:cursor-not-allowed text-white p-3 font-bold transition-colors'
                >
                    {isLoading ? 'Signing up...' : 'Submit'}
                </button>

                {isLoading && (
                    <div className="flex justify-center items-center mt-2">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
                    </div>
                )}

                {message.error && (
                    <div className="text-red-500 mt-2 p-2 bg-red-50 rounded">{message.error}</div>
                )}

                {message.resolved && (
                    <div className="text-green-500 mt-2 p-2 bg-green-50 rounded">{message.resolved}</div>
                )}
            </form>
        </div>
    );
}