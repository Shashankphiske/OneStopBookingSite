import React, { use, useEffect, useRef, useState } from 'react'
import Carousal from "./Carousal"
import { useSelector, useDispatch } from 'react-redux'

import EventCard from "./EventCard"

const Home = () => {






    const eventsData = useSelector((state) => state.data.eventsData);





  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center md:mt-20'>
        <Carousal />
        <div className='flex flex-col gap-10 w-[80vw] pb-10'>
            <div className='flex flex-col justify-center gap-6'>
                <p className='text-black text-[1.5vw] font-semibold'>Recommended Events</p>
                <div className='flex flex-row gap-8 w-full flex-wrap'>
                    {
                        eventsData?.map((val, i) => {
                            return <EventCard data={val} key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
