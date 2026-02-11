import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-10 bg-[#CAF0F8] flex flex-col md:flex-row justify-around items-center gap-8 mt-auto'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold text-[#0077B6] tracking-tighter'>OneStopBooking</h1>
            <p className='text-gray-600 text-sm'>Your gateway to the best entertainment.</p>
        </div>
        
        <div className='flex flex-row gap-8 text-gray-700 font-medium'>
            <a href="#" className='hover:text-[#0077B6] transition-colors'>Privacy</a>
            <a href="#" className='hover:text-[#0077B6] transition-colors'>Terms</a>
            <a href="#" className='hover:text-[#0077B6] transition-colors'>Contact</a>
        </div>

        <div className='text-gray-500 text-sm'>
            &copy; 2026 OneStopBooking. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
