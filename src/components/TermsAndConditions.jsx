import React from 'react'
import { Link } from 'react-router';

const TermsAndConditions = ({ onClose }) => {
  return (
    <div className='w-[40vw] p-5 flex flex-col gap-5 rounded-xl bg-white z-30'>
      <div className='flex flex-row w-full gap-10 justify-between items-center'>
        <p className='text-[1.8vw] font-semibold'>Terms & Conditions</p>
        <p onClick={onClose}>C</p>
      </div>
      <div className='flex flex-col justify-center gap-2 text-[1vw] text-gray-500'>
        <p>1. Tickets once booked cannot be exchanged or refunded.</p>
        <p>2. We recommend that you arrive at-least 30 minutes prior at the venue.</p>
        <p>3. Unlawful resale (or attempted unlawful resale) of a ticket would lead to seizure or cancellation of that ticket without refund or other compensation.</p>
        <p>4. Rights of admission reserved.</p>
        <p>5. These terms and conditions are subject to change from time to time at the discretion of the organizer.</p>
      </div>
      <Link to="/booking">
        <button style={{ cursor : "pointer" }} onClick={() => {onClose();}} className='px-4 py-3 rounded-xl text-[1vw] text-white bg-[#0077B6] hover:bg-[#03045E]'>Proceed</button>
      </Link>
    </div>
  )
}

export default TermsAndConditions
