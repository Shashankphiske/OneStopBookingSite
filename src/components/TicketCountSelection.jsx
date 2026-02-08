import React from 'react'
import { useState } from 'react';
import ticketimg from "../assets/vectorticket.jpg"
import { useSelector, useDispatch } from 'react-redux';
import { setCurrCount } from '../Redux/dataSlice';

const TicketCountSelection = ({ price, onClose, openTerms }) => {

  const [active, setActive] = useState(null);

  const dispatch = useDispatch();
  return (
    <div className='rounded-xl flex flex-col items-center justify-center p-5 gap-8'>
        <div className='flex flex-row justify-between items-center gap-10 w-full'>
          <p className='text-[1.3vw]'>Count of members ?</p>
          <button style={{cursor : "pointer"}} onClick={onClose} className='rounded-full bg-gray-300 text-white px-4 py-2'>C</button>
        </div>
        <img src={ticketimg} alt="" className='w-2/3 h-auto'/>
        <div className="flex flex-row gap-3 w-full text-[1.2vw]">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setActive(num)}
              style={{ cursor : "pointer" }}
              className={`
                w-10 h-10 flex items-center justify-center
                rounded-full transition-all duration-200 text-center
                ${
                  active === num
                    ? "bg-[#00B4D8] text-white"
                    : "bg-transparent text-black hover:bg-[#90E0EF]"
                }
              `}
            >
              {num}
            </button>
          ))}
        </div>
       <div className='flex flex-row items-center justify-between gap-10 w-full'>
          <p className='text-[1.1vw]'>Single Ticket Price : ₹ {price}</p>
          <button style={{ cursor : "pointer" }} onClick={() => { dispatch(setCurrCount(active)); openTerms(); onClose()}} className='text-white text-[1vw] px-4 py-3 rounded-xl bg-[#0077B6] hover:bg-[#03045E]'>Select Members</button>
       </div>
    </div>
  )
}

export default TicketCountSelection
