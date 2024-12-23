import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, googleSignIn } from '../Firebase/Authentication';
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ 
        email: '', 
        password: ''
    });
    const [info, setInfo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const formSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const result = await signIn(credentials);
            
            if (result.error) {
                setInfo(`Error: ${result.error}`);
            } else if (result.success) {
                setInfo('Login Successful! Redirecting...');
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }
        } catch (error) {
            setInfo(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await googleSignIn();
            if (result.error) {
                setInfo(`Error: ${result.error}`);
            } else if (result.success) {
                navigate("/");
            }
        } catch (error) {
            setInfo(`Error: ${error.message}`);
        }
    };

    return (
        <div className='w-full bg-amour hero h-screen flex justify-center align-middle relative p-3 md:p-5 lg:p-10'>
            <form
                className='p-5 w-4/5 scale-110 text-sm md:text-md bg-white flex flex-col md:w-96 pl-7 pr-7 text-center rounded-xl shadow-xl self-center'
                onSubmit={formSubmit}
            >
                <div className='w-full text-center font-bold text-2xl'>Login</div>

                <div className='mt-6 text-left flex flex-col gap-2'>
                    <div className='font-medium'>Email</div>
                    <input
                        required
                        type="email"
                        value={credentials.email}
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        placeholder='Email'
                        className='w-full p-1 pl-2 bg-amber-50/20 border border-gray-300 rounded active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black'
                    />
                    <div className='font-medium'>Password</div>
                    <input
                        required
                        type="password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        placeholder='Password'
                        className='w-full p-1 pl-2 rounded bg-amber-50/20 border border-gray-300 active:border-gray-300 focus:outline-none focus:border-gray-400 focus:text-black/80'
                    />
                </div>
                
                <div className='w-full text-right mt-2 relative underline underline-offset-1 text-slateblue/80 cursor-pointer hover:text-slateblue'>
                    <span onClick={() => navigate('/forgotpassword')} className='absolute right-0'>
                        Forgot password
                    </span>
                </div>

                <button
                    type='submit'
                    disabled={isLoading}
                    className='mt-8 rounded bg-green-400/70 hover:bg-green-400 hover:text-white text-white/80 flex-inline p-2 font-bold disabled:opacity-50 disabled:cursor-not-allowed'
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>

                {info && (
                    <div className={`mt-2 ${info.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {info}
                    </div>
                )}
                
                <div className='flex flex-row justify-center align-middle gap-2 mt-6'>
                    <div className='w-full p-[1px] rounded bg-slate-500/15 self-center'></div>
                    <div className='self-center'>or</div>
                    <div className='w-full p-[1px] rounded bg-slate-500/15 self-center'></div>
                </div>
                <div className='mt-4 flex justify-center align-middle'>
                    <FcGoogle 
                        onClick={handleGoogleSignIn} 
                        className='self-center w-8 h-8 cursor-pointer'
                    />
                </div>
                
                <div className='mt-6 text-sm'>
                    Don&apos;t have an account?{' '}
                    <span
                        className='underline underline-offset-1 text-slateblue/80 cursor-pointer hover:text-slateblue'
                        onClick={() => navigate('/signup')}
                    >
                        Sign up
                    </span>{' '}
                    here
                </div>
            </form>
        </div>
    );
}