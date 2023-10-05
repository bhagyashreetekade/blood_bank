import React from 'react'
import { AiFillHome, AiFillHeart } from 'react-icons/ai'
import { BiSolidDonateBlood } from 'react-icons/bi'
import { FaHospitalAlt } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='bg-[#ffffff] p-5 px-8 fixed  h-screen'>
      <h1 className='text-2xl font-bold font-sans px-2 mt-2'>Need<span className='text-red-500'>Blood</span></h1>

      <ul className='mt-5 text-lg space-y-2 w-[12rem]'>
        <li className='hover:bg-[#d7dae6] rounded-xl px-2 p-2 flex items-center text-[#6f828e] font-semibold tracking-wide cursor-pointer hover:text-gray-800 w-full'><AiFillHome className='text-lg mr-3 text-red-600' />Dashboard</li>

        <li className='hover:bg-[#d7dae6] rounded-xl px-2 p-2 flex items-center text-[#6f828e] font-semibold tracking-wide cursor-pointer hover:text-gray-800'><AiFillHeart className="text-lg mr-3 text-red-500 hover:text-red-600" />Donors</li>

        <li className='hover:bg-[#d7dae6] rounded-xl px-2 p-2 flex items-center text-[#6f828e] font-semibold tracking-wide cursor-pointer hover:text-gray-800'><BiSolidDonateBlood className="text-lg mr-3 text-red-500 hover:text-red-600" />Receiver</li>

        <li className='hover:bg-[#d7dae6] rounded-xl px-2 p-2 flex items-center text-[#6f828e] font-semibold tracking-wide cursor-pointer hover:text-gray-800'><FaHospitalAlt className="text-lg mr-3 text-red-500 hover:text-red-600" />Hospitals</li>

      </ul>
    </div>
  )
}

export default Sidebar