import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeAuthListener, signOut } from "../Firebase/Authentication";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";

export const Navbar = () => {
    const [user, setUser] = useState(null);
    const [userCredentials, setUserCredentials] = useState({ name: '', email: '', photoUrl: '' });
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    // Initialize authentication listener
    useEffect(() => {
        const unsubscribe = initializeAuthListener((user) => {
            setUser(user);
            if (user) {
                setUserCredentials({
                    name: user.displayName || '',
                    email: user.email || '',
                    photoUrl: user.photoURL || ''
                });
            } else {
                setUserCredentials({ name: '', email: '', photoUrl: '' });
                if (!window.location.pathname.includes('/login')) {
                    navigate('/login');
                }
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Handle user logout
    const handleLogout = async () => {
        try {
            await signOut();
            setIsProfileDropdownOpen(false);
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    // Menu items for navigation
    const menuItems = [
        { label: 'home', path: '/' },
        { label: 'about', path: '/about' },
        { label: 'services', path: '/services' },
        { label: 'faq', path: '/faq' }
    ];

    // Render menu items
    const renderMenuItems = () =>
        menuItems.map((item) => (
            <div key={item.label} onClick={() => navigate(item.path)} className="cursor-pointer bg-transparent hover:text-black transition-colors duration-200">
                {item.label}
            </div>
        ));

    // Profile dropdown component
    const ProfileDropdown = () => {
        return (
            <div className="relative">
                <div id="profile-button" onClick={(e) => { e.stopPropagation(); setIsProfileDropdownOpen(!isProfileDropdownOpen); }} className="flex items-center gap-2 cursor-pointer">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border-2">
                        <IoPersonCircleSharp className="w-full h-full text-slateblue" />
                    </div>
                </div>
                {isProfileDropdownOpen && (
                    <div id="profile-dropdown" className={`absolute bg-white rounded-md shadow-lg py-1`} style={{ top: '60px', right: '0px', zIndex: 9999 }} onClick={(e) => e.stopPropagation()}>
                        <div className="px-4 py-2 border-b">
                            { userCredentials.name ? <p className="text-xs text-left font-medium text-gray-900">{userCredentials.name}</p> : <p className="text-xs text-left font-medium text-gray-900">{userCredentials.firstname}{userCredentials.lastname}</p>}
                            <p className="text-[15px] mt-1 text-left lowercase text-gray-500">{userCredentials.email}</p>
                        </div>
                        <div onClick={(e) => { e.stopPropagation(); navigate('/show/service'); setIsProfileDropdownOpen(false); }} className="block px-4 text-left cursor-pointer py-2 text-xs text-gray-700 hover:bg-gray-100">
                           Services
                        </div>
                        <div onClick={(e) => { e.stopPropagation(); handleLogout(); }} className="block px-4 text-left py-2 text-xs text-red-600 hover:bg-gray-100 cursor-pointer">
                            Log out
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // Handle scroll event to hide dropdown
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
                setIsProfileDropdownOpen(false); // Close dropdown on scroll
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar z-50 fixed top-0 bg-white uppercase font-medium text-black/70 ${isScrolled ? 'shadow-md' : ''}`}>
            {/* Logo Section */}
            <div className="navbar-start w-full ml-6 lg:w-36">
                <img src={logo} className="w-20 h-8" alt="Logo" onClick={() => navigate('/')} role="button" />
            </div>
            {/* Desktop Menu */}
            <div className="navbar-start ml-6 text-black/55 hidden lg:flex">
                <ul className="menu menu-horizontal flex flex-row gap-14 px-1">
                    {renderMenuItems()}
                </ul>
            </div>
            {/* Mobile Menu & Auth Buttons */}
            <div className="navbar-end mr-4">
                {/* Mobile Menu Dropdown */}
                {user ? 
               <div className="flex lg:hidden">
                 <ProfileDropdown/>
               </div> :               
                 <div className="dropdown dropdown-bottom dropdown-end  lg:hidden">
                 <div tabIndex={0} role="button" aria-label="menu" onClick={() => setIsProfileDropdownOpen(false)}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current cursor-pointer bg-slateblue rounded-md w-8 h-8 text-white">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                 </div>
                 <ul tabIndex={0} className={`menu menu-sm dropdown-content flex flex-col gap-2 w-28 text-black/55 rounded-sm z-[1] mt-3 p-2 shadow bg-white`}>
                     {renderMenuItems()}
                 </ul>
             </div>
                }
                

                {/* Desktop Auth Buttons */}
                <div className="flex-row lg:flex hidden gap-5 justify-center align-middle">
                    <div onClick={() => navigate('/contact')} className="self-center text-black/55 cursor-pointer hover:text-black transition-colors duration-200">contact us</div>
                    {user ? (
                        <>
                            <ProfileDropdown />
                        </>
                    ) : (
                        <div onClick={() => navigate('/login')} className="text-white font-extrabold cursor-pointer bg-buttoncolor p-2 self-center text-center w-28 rounded-full hover:bg-buttoncolor/90 transition-colors duration-200">log in</div>
                    )}
                </div>
            </div>

          
        </div>
    );
};
 
export default Navbar;
