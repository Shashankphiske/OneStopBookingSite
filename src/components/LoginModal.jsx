import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Redux/dataSlice'

const LoginModal = ({ onClose, onLoginSuccess }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            dispatch(loginUser({ name, email }));
            onLoginSuccess();
            onClose();
        } else {
            setError("Please enter both name and email");
        }
    }

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Background overlay */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal content */}
            <div className="relative z-10 bg-white rounded-2xl p-8 w-[90vw] md:w-[30vw] flex flex-col gap-5 animate-bounce-in shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800">Login to Book</h2>
                <p className="text-gray-500 text-sm">Enter your details to proceed with the booking.</p>
                {error && <p className="text-red-500 text-sm bg-red-50 p-2 rounded-md">{error}</p>}
                
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-semibold text-gray-700'>Name</label>
                        <input 
                            type="text" 
                            className='border-[1px] border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6]'
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-semibold text-gray-700'>Email</label>
                        <input 
                            type="email" 
                            className='border-[1px] border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0077B6]'
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <button type="submit" className='mt-2 w-full py-3 rounded-xl bg-[#0077B6] hover:bg-[#03045E] text-white font-semibold transition-colors'>
                        Continue Booking
                    </button>
                </form>
            </div>
        </div>,
        document.body
    )
}

export default LoginModal
