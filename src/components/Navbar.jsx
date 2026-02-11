import React, { useState } from 'react'
import { Link } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../Redux/dataSlice'
import LoginModal from './LoginModal'

const Navbar = () => {
  const currentUser = useSelector((state) => state.data.currentUser);
  const dispatch = useDispatch();
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div className='w-full h-20 flex flex-row items-center justify-between px-10 fixed top-0 left-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm'>
        <Link to="/" className='text-2xl font-bold text-[#0077B6] tracking-tighter'>OneStopBooking</Link>
        <div className='flex flex-row items-center gap-8 font-medium text-gray-600'>
            <Link to="/" className='hover:text-[#0077B6] transition-colors'>Home</Link>
            <Link to="/about" className='hover:text-[#0077B6] transition-colors'>About Us</Link>
            <Link to="/contact" className='hover:text-[#0077B6] transition-colors'>Contact</Link>
            
            {currentUser ? (
                <div className='flex items-center gap-6 pl-6 border-l border-gray-300'>
                    <Link to="/my-bookings" className='hover:text-[#0077B6] transition-colors'>My Bookings</Link>
                    <div className='flex items-center gap-3 group relative cursor-pointer'>
                        <div className='w-8 h-8 rounded-full bg-[#0077B6] text-white flex items-center justify-center font-bold'>
                            {currentUser.name.charAt(0).toUpperCase()}
                        </div>
                        <span className='text-sm text-gray-800'>{currentUser.name}</span>
                        
                        <div className='absolute top-full right-0 pt-2 hidden group-hover:block'>
                           <button 
                                onClick={() => dispatch(logoutUser())}
                                className='bg-white shadow-lg border border-gray-100 px-4 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 whitespace-nowrap'
                           >
                                Logout
                           </button>
                        </div>
                    </div>
                </div>
            ) : (
                <button 
                  onClick={() => setLoginOpen(true)}
                  className='px-4 py-2 rounded-lg bg-[#0077B6] text-white hover:bg-[#03045E] transition-colors text-sm'
                >
                    Login
                </button>
            )}
        </div>
        
        {loginOpen && (
            <LoginModal 
                onClose={() => setLoginOpen(false)} 
                onLoginSuccess={() => setLoginOpen(false)} 
            />
        )}
    </div>
  )
}

export default Navbar
