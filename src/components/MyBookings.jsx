import React from 'react'
import { useSelector } from 'react-redux'
import EventCard from './EventCard'
import { Link } from 'react-router'

const MyBookings = () => {
    const bookings = useSelector((state) => state.data.bookings);
    const currentUser = useSelector((state) => state.data.currentUser);

    // Filter bookings for the current user (mock logic: assuming bookings in Redux are global, 
    // but distinct for this session. In a real app coverage, we'd filter by userID).
    // Since this is a session-based demo, we'll just show all bookings in the store.

    if (!currentUser) {
        return (
            <div className='w-full h-screen flex flex-col items-center justify-center gap-5'>
                <h1 className='text-2xl font-bold'>Please Login to view your bookings</h1>
                <Link to="/" className='text-[#0077B6] underline'>Go Home</Link>
            </div>
        )
    }

    return (
        <div className='w-full min-h-screen flex flex-col items-center pt-32 pb-10 gap-8'>
            <h1 className='text-3xl font-bold text-gray-800'>My Bookings</h1>
            
            {bookings.length === 0 ? (
                <div className='flex flex-col items-center gap-4 text-gray-500'>
                    <p>No bookings found.</p>
                    <Link to="/" className='px-6 py-2 bg-[#0077B6] text-white rounded-lg hover:bg-[#03045E] transition-all'>
                        Browse Events
                    </Link>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80vw]'>
                    {bookings.map((booking, index) => {
                        // We need to reconstruct event data-like structure for EventCard usually, 
                        // or just create a simple card here.
                        // Let's create a custom simple card for bookings.
                        return (
                            <div key={index} className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all'>
                                <div className='p-6 flex flex-col gap-3'>
                                    <div className='flex justify-between items-start'>
                                        <h3 className='font-bold text-xl truncate'>{booking.title}</h3>
                                        <span className='bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full'>Confirmed</span>
                                    </div>
                                    <p className='text-gray-600 text-sm'>{booking.date} | {booking.time}</p>
                                    <p className='text-gray-500 text-sm'>{booking.location}</p>
                                    <div className='border-t border-gray-100 my-2'></div>
                                    <div className='flex justify-between items-center text-sm font-medium'>
                                        <span>Tickets: {booking.count}</span>
                                        <span className='text-[#0077B6]'>₹ {booking.amount / 100}</span>
                                    </div>
                                    <p className='text-xs text-gray-400 mt-2'>Booking ID: {booking.bookingId}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default MyBookings
