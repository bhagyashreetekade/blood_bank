import React from 'react';
import Card from './Card';
import Navbar from './Navbar';
import { CiMenuKebab } from 'react-icons/ci';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Make sure to import Leaflet CSS
import Map from './Map';

const Dashboard = () => {

  const position = [51.505, -0.09];
  return (
    <>
      <div className=''><Navbar /></div>
      <Card />
      <div className='flex relative space-x-16 mt-72'>
        <div className="scroll-my-1.5 ">
          <div className='pl-10'>
            <div className='flex space-x-40'>
              <h1 className='text-gray-500 text-xl font-semibold tracking-wide'>Recent Donors</h1>
              <div className='py-[0.35rem] border-2 border-gray-500 rounded-lg cursor-pointer'>
                <CiMenuKebab className='text-2xl' />
              </div>
            </div>

            <div className='overflow-y-auto mt-5 h-80 space-y-5 pr-5'>
              <div className='bg-white rounded-xl shadow-md w-80 p-3 px-4 flex space-x-7'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='h-12 rounded-full' alt="" />
                <div>
                  <h1 className='text-lg font-semibold'>Tom Cruise</h1>
                  <h1 className='text-xs font-semibold  text-gray-500'>3rd October 2023</h1>
                </div>
              </div>
              <div className='bg-white rounded-xl shadow-md w-80 p-3 px-4 flex space-x-7'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='h-12 rounded-full' alt="" />
                <div>
                  <h1 className='text-lg font-semibold'>Tom Cruise</h1>
                  <h1 className='text-xs font-semibold  text-gray-500'>3rd October 2023</h1>
                </div>
              </div>
              <div className='bg-white rounded-xl shadow-md w-80 p-3 px-4 flex space-x-7'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='h-12 rounded-full' alt="" />
                <div>
                  <h1 className='text-lg font-semibold'>Tom Cruise</h1>
                  <h1 className='text-xs font-semibold  text-gray-500'>3rd October 2023</h1>
                </div>
              </div>
              <div className='bg-white rounded-xl shadow-md w-80 p-3 px-4 flex space-x-7'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='h-12 rounded-full' alt="" />
                <div>
                  <h1 className='text-lg font-semibold'>Tom Cruise</h1>
                  <h1 className='text-xs font-semibold  text-gray-500'>3rd October 2023</h1>
                </div>
              </div>
              <div className='bg-white rounded-xl shadow-md w-80 p-3 px-4 flex space-x-7'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='h-12 rounded-full' alt="" />
                <div>
                  <h1 className='text-lg font-semibold'>Tom Cruise</h1>
                  <h1 className='text-xs font-semibold  text-gray-500'>3rd October 2023</h1>
                </div>
              </div>
              <div className='bg-white rounded-xl shadow-md w-80 p-3 px-4 flex space-x-7'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='h-12 rounded-full' alt="" />
                <div>
                  <h1 className='text-lg font-semibold'>Tom Cruise</h1>
                  <h1 className='text-xs font-semibold  text-gray-500'>3rd October 2023</h1>
                </div>
              </div>
              <div className='bg-white rounded-xl shadow-md w-80 p-3 px-4 flex space-x-7'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='h-12 rounded-full' alt="" />
                <div>
                  <h1 className='text-lg font-semibold'>Tom Cruise</h1>
                  <h1 className='text-xs font-semibold  text-gray-500'>3rd October 2023</h1>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className='w-[80rem]'>
          <Map />

        </div>


      </div >

    </>
  )
}

export default Dashboard