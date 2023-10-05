import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className='col-span-1 right-0'>
          <Sidebar />
        </div>
        <div className='col-span-4 bg-[#f5f6fa] rounded-l-[2rem] p-5 w-full h-screen'>
          <Dashboard />
        </div>

      </div>
    </>
  );
}

export default App;
