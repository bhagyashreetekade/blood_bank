import React from 'react'
import { MdNotifications } from 'react-icons/md'
import { CiMenuKebab } from 'react-icons/ci'


const Navbar = () => {
    return (
        <div className='fixed right-5 flex space-x-5 justify-center items-center z-999'>
            <MdNotifications className='text-2xl' />
            <div className='font-bold justify-end flex flex-col items-end'>
                <h1 className='text-md'>Hospital</h1>
                <p className='text-xs text-gray-700'>Amravati</p>
            </div>

            <div>
                <img src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=1060&t=st=1696311869~exp=1696312469~hmac=16de84fd14a6bf036421c01118b99906483f8f3e7af2d2844ecca13d391f09e1" alt="" className='h-10 w-10 bg-cover border-2 border-gray-700 rounded-lg' />
            </div>

            <div className='py-[0.35rem] border-2 border-gray-500 rounded-lg cursor-pointer'>
                <CiMenuKebab className='text-2xl'/>
            </div>

        </div>
    )
}

export default Navbar