/* eslint-disable react/jsx-key */
import React from 'react'
import Image from 'next/image'

import deskimg from "./assets/images/illustration-sign-up-desktop.svg"
import listicon from "./assets/images/icon-list.svg"

const listData = [
  {
    label: "Product discovery and building what matters"
  },
  {
    label: "Measuring to ensure updates are a success"
  },
  {
    label: "And much more!"
  }
]

const UpdatesList = () => {
  return(
    <div className='flex flex-col gap-2'>
      {listData.map((list)=>{
        return(
          <div className='flex flex-row gap-2'>
            <Image src={listicon} alt='img' />
            <h1>{list.label}</h1>
          </div>
        )
      })}
    </div>
  )
}

// const validateEmail = (email) => {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return emailRegex.test(email);
// };

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#36384e]">
      <div className="flex flex-row p-4 bg-white rounded-3xl">
        <div className='flex flex-col gap-6 py-20 px-4 mr-16 ml-8'>
          <h1 className='text-5xl font-bold'>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly <br/>updates on:</p>
          <UpdatesList />
          <div className='flex flex-col gap-1'>
            <h1 className='text-sm'>Email address</h1>
            <input type="text" placeholder='email@company.com' className='p-4 border-2 rounded-lg border-gray-400 focus:outline-none' />
          </div>
          <button className='bg-[#242742] text-white py-4 rounded-xl hover:bg-gradient-to-r from-pink-500 to-amber-500'>
              <h1>Subscribe to monthly newsletter</h1>
          </button>
        </div>
        <div>
          <Image src={deskimg} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default page
