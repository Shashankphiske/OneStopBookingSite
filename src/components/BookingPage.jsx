import { current } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addBooking } from '../Redux/dataSlice'

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

const BookingPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 3000); // Redirect after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [showSuccess, navigate]);
    
    const currEvent = useSelector((state) => state.data.currEvent);
    const currCount = useSelector((state) => state.data.currCount);

    const handlePayment = async () => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        // Calculate amount in paise
        // Default to logic from the JSX: currCount * currEvent.price
        // Access environment variable safely
        const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
        
        if (!key) {
            alert("Razorpay Key ID not found. Check .env file.")
            return;
        }

        const amount = (currCount * currEvent.price) * 100; // Amount in paise

        const options = {
            key: key, 
            currency: "INR",
            amount: amount, 
            name: "OneStopBooking",
            description: `Booking for ${currEvent.title}`,
            image: "https://example.com/your_logo", // You can replace this with your logo
            handler: function (response) {
                // alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
                const bookingData = {
                    eventId: currEvent.id,
                    title: currEvent.title,
                    date: currEvent.date,
                    time: currEvent.time,
                    location: currEvent.location,
                    count: currCount,
                    amount: amount,
                    bookingId: response.razorpay_payment_id
                };
                dispatch(addBooking(bookingData));
                setShowSuccess(true);
                // Here you would typically send the response to your backend to verify
            },
            prefill: {
                name: "User Name", // You can get this from Redux if available
                email: "user@example.com",
                contact: "919999999999" // Use valid format with country code
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#0077B6"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

  return (
    <>
    <div className='w-full min-h-screen flex flex-col items-center pt-32 pb-10 gap-5'>
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
            <button onClick={handlePayment} style={{ cursor : "pointer" }} className='text-white text-[1vw] px-4 py-3 rounded-xl bg-[#0077B6] hover:bg-[#03045E]'>Pay Now</button>
        </div>
    </div>
    {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center gap-4 animate-bounce-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Payment Successful!</h2>
                <p className="text-gray-600 text-center">Thank you for your booking.<br/>Redirecting you to home...</p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div className="bg-green-500 h-1.5 rounded-full animate-progress"></div>
                </div>
            </div>
        </div>
    )}
    </>
  )
}

export default BookingPage
