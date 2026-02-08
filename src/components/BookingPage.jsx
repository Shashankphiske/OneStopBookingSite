import { current } from '@reduxjs/toolkit';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const BookingPage = () => {

    const dispatch = useDispatch();
    
    const currEvent = useSelector((state) => state.data.currEvent);
    const currCount = useSelector((state) => state.data.currCount);

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-5'>
        <div className='rounded-xl w-[30vw] p-5 bg-cyan-50 flex flex-col gap-2 items-center justify-center'>
            <div className='flex flex-row items-center justify-between gap-10'>
                <p>{currEvent.title}</p>
                <p>{currCount}</p>
            </div>
            <p>{currEvent.date} | {currEvent.time}</p>
            <p>{currEvent.location}</p>
        </div>
        <div className='rounded-xl w-[30vw] p-5 border-[1px] border-gray-300 gap-3 flex flex-col'>
            <div className='flex flex-row justify-between items-center gap-10'>
                <p>Ticket(s) price</p>
                <p>₹{currEvent.price}</p>
            </div>
            <div className='border-[1px] border-gray-400 border-dotted'></div>
            <div className='flex flex-row items-center justify-between gap-10'>
                <p>Order total</p>
                <p>{ currCount == undefined ? "Null" : currCount * currEvent.price }</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center p-5 w-[30vw] rounded-xl border-[1px] border-gray-300'>
            <div className='flex flex-row items-center justify-between gap-10 w-full'>
                <p>For sending booking details</p>
                <p>Edit</p>
            </div>
        </div>
        <div className='w-[30vw] flex flex-col justify-center gap-5 border-[1px] border-gray-300 p-5 rounded-xl'>
            <p>By proceeding, I express my consent to complete this transaction.</p>
            <div className='flex flex-row items-center justify-between gap-10'>
                <p>Amount Payable</p>
                <p>{ currCount == undefined ? "Null" : currCount * currEvent.price }</p>
            </div>
            <button style={{ cursor : "pointer" }} className='text-white text-[1vw] px-4 py-3 rounded-xl bg-[#0077B6] hover:bg-[#03045E]'>Pay Now</button>
        </div>
    </div>
  )
}

export default BookingPage
