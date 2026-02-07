import React from 'react'
import { Link } from 'react-router'

const EventCard = ({ data }) => {
  return (
    <Link to={`/events/${data.id}`}>
      <div className='flex flex-col items-center justify-center gap-10 w-[15vw]' style={{ cursor : "pointer" }}>
          <div className='w-full rounded-xl overflow-hidden'>
            <img src={data.coverimg} alt={data.coverimg} className='rounded-xl w-[15vw] h-auto hover:scale-110 transition-transform duration-300 ease-in-out'/>
          </div>
          <div className='flex flex-col gap-3 justify-center'>
            <p className='text-black text-[1.3vw]'>{data.title}</p>
            <p className='text-gray-500 text-[1.2vw]'>{data.location}</p>
          </div>
      </div>
    </Link>
  )
}

export default EventCard
