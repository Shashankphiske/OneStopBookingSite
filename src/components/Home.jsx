import React, { use, useEffect, useRef, useState } from 'react'
import Carousal from "./Carousal"
import { useSelector, useDispatch } from 'react-redux'
import { setEventsData, setNightShows } from '../Redux/dataSlice'
import EventCard from "./EventCard"

const Home = () => {

    let data = [
        {
            id : "LaughterTherapy1522026",
            type : "Laughter Therapy",
            title : "Vipul Goyal Unleashed",
            location : "Laugh and Vibe Club, Koregaon Park, Pune",
            coverimg : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00468092-nlaqaljavu-portrait.jpg",
            bannerimg : "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-vipul-goyal-live-0-2025-10-24-t-14-0-2.jpg",
            date : "Sat 15 Feb 2026",
            time : "6:15 PM",
            duration : "1 hour 15 minutes",
            locationlink : "https://www.google.com/maps/search/?api=1&query=18.538300,73.907700",
            price : "899",
            ticketcount : 40,
            about : "Caution: This is a riot..a laugh riot! \n TVF`s hugely popular web series `Humorously Yours` will now come to your city, yeah.. you can experience the jokes LIVE. Vipul Goyal with his trove of relatable jokes and cult-y punchlines will have you laughing like a hyena. \n Join in for a rib-tickling laugh!"
        }
    ]

    let events = ["Movie Night", "Music Events", "Outdoor Events", "Laughter Therapy", "Games & Sports Events"];

    const dispatch = useDispatch();
    const eventsData = useSelector((state) => state.data.eventsData);
    const nightShows = useSelector((state) => state.data.nightShows);

    useEffect(() => {
        if(!eventsData){
            dispatch(setEventsData(data));
        }
    }, [dispatch, eventsData])

    useEffect(() => {
        if (eventsData == undefined) return;

        const nightshowdata = eventsData.filter((event) => event.type == "Laughter Therapy");
        dispatch(setNightShows(nightshowdata))
    }, [dispatch, eventsData])

    useEffect(() => {
        console.log(nightShows)   
    }, [nightShows])

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center md:mt-20'>
        <Carousal />
        {
            nightShows != undefined && <div className='flex flex-col justify-center w-[80vw] gap-6'>
                <p className='text-black text-[1.5vw] font-semibold'>Laughter Therapy</p>
                <div className='flex flex-row gap-15 w-full'>
                    {
                        nightShows.map((val, i) => {
                            return <EventCard data={val} key={i} />
                        })
                    }
                </div>
            </div> 
        }
    </div>
  )
}

export default Home
