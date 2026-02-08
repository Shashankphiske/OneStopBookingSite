import React from 'react'

const EditContactDetails = () => {
  return (
    <div className='flex flex-col items-center justify-center p-5 w-[40vw] gap-4'>
        <div className='flex flex-row items-center justify-between gap-10'>
            <p>Contact Details</p>
            <p>C</p>
        </div> 
        <div className='flex flex-col gap-1'>
            <p><span className='text-red-600'>*</span>Your Email</p>
            <input type="text" className='p-2 rounded-lg w-full' placeholder='xyz@gmail.com'/>
        </div>
        <div className='flex flex-col gap-1'>
            <p><span className='text-red-600'>*</span>Mobile Number</p>
            <input type="text" className='p-2 rounded-lg w-full' placeholder='9999999999'/>
        </div>
        <button className='text-white text-[1vw] px-4 py-3 rounded-xl bg-[#0077B6] hover:bg-[#03045E]'>Submit</button>
    </div>
  )
}

export default EditContactDetails
