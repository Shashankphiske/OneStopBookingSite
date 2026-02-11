import React, { use, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrEvent } from '../Redux/dataSlice';
import TicketCountSelection from './TicketCountSelection';
import TermsAndConditions from "./TermsAndConditions"
import LoginModal from './LoginModal';

const EventPage = () => {

    const { id } = useParams();

    const eventsData = useSelector((state) => state.data.eventsData);
    const currEvent = useSelector((state) => state.data.currEvent);
    const currentUser = useSelector((state) => state.data.currentUser);

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [topen, setTOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const handleBookNow = () => {
        if (currentUser) {
            setOpen(true);
        } else {
            setLoginOpen(true);
        }
    }


    useEffect(() => {
        const data = eventsData.find((e) => e.id == id)

        dispatch(setCurrEvent(data));
    }, [id])

  return (
    currEvent != undefined && <div className='w-full flex flex-col items-center justify-center mt-40'>
        <div className='w-[80vw] h-screen flex flex-col gap-5'>
            <div className='flex flex-row w-[50vw] gap-10 justify-between'>
                <p className='font-semibold text-[1.6vw]'>{currEvent.title}</p>
                <h1>{currEvent.locationLink}</h1>
                <a target='_blank'><img src="https://assets-in.bmscdn.com/nmcms/synopsis/share_v2.png" alt="" className='w-10 h-10'/></a>
            </div>
            <div className='flex flex-row gap-10 w-full'>
                <div className=' rounded-xl'>
                    <img src={currEvent.bannerimg} alt="" className='rounded-xl w-[50vw] h-[28vw] object-cover'/>
                </div>
                <div className='flex flex-col w-[20vw] p-5 rounded-xl border-2 border-gray-200 gap-3 justify-between text-[1vw]'>
                    <p>Date : {currEvent.date}</p>
                    <p>Time : {currEvent.time}</p>
                    <p>Duration : {currEvent.duration}</p>
                    <p>Type : {currEvent.type}</p>
                    <div className='flex flex-row gap-3'>
                        <p>Location : {currEvent.location}</p>
                        <a href={currEvent.locationlink} target="_blank"><img src="https://assets-in.bmscdn.com/nmcms/synopsis/navigate_icon.png" alt="" className='w-15 h-10'/></a>
                    </div>
                    <div className='border-[1px] border-gray-400'></div>
                    <div className='flex flex-row items-center justify-between gap-3'>
                        <p className='text-[1.3vw]'>₹ {currEvent.price}</p>
                        <button onClick={handleBookNow} style={{ cursor : "pointer" }} className='px-4 py-3 rounded-xl bg-[#0077B6] hover:bg-[#03045E] text-white text-[1vw]'>Book Now</button>
                    </div>
                </div>
        </div>

            <div className='flex flex-col gap-5 w-[40vw]'>
                <p className='text-[1.4vw]'>About The Event</p>

                <p className='text-[1.1vw]'>{currEvent.about}</p>
            </div>

        </div>
        {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                
                {/* Background overlay */}
                <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setOpen(false)}
                />

                {/* Modal content */}
                <div className="relative z-10 bg-white rounded-2xl p-6 w-[30vw]">
                <TicketCountSelection onClose={() => setOpen(false)} price={currEvent.price} openTerms={() => setTOpen(true)} />
                </div>

            </div>
        )}
        {topen && (
            <div className="fixed inset-0 z-20 flex items-center justify-center">
                
                {/* Background overlay */}
                <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setOpen(false)}
                />
                <TermsAndConditions onClose={() => setTOpen(false)} />

            </div>
        )}



        {loginOpen && (
            <LoginModal 
                onClose={() => setLoginOpen(false)} 
                onLoginSuccess={() => setOpen(true)} 
            />
        )}

    </div>
  )
}

export default EventPage
