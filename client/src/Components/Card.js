import React from 'react';

const Card = () => {

    return (
        <>
            {/* <Card bgcolor="#dce9ff" title="Requested" textColor="blue-500" /> */}
            {/* <Card bgcolor="#ffccd4" title="Received" textColor="red-500" /> */}
            {/* <Card bgcolor="#a2f8bb" title="In Stock" textColor="green-700" /> */}
            <div className='cards fixed top-5 flex justify-between items-center space-x-10 mt-20 px-10'>
                
                <div className={`bg-[#dce9ff] p-5 w-80 shadow-lg rounded-xl`}>
                    <div className='flex justify-between items-center'>
                        <h1 className={`text-blue-500 font-bold text-lg tracking-wide`}>Requested</h1>
                        <h1 className={`text-blue-500 font-bold text-xs tracking-wide`}>3 October 2023</h1>
                    </div>

                    <div className='flex justify-between items-end mt-2'>
                        <div>
                            <h1 className={`text-blue-500 font-semibold `}>Total</h1>
                            <h1 className={`text-blue-500 font-bold text-3xl `}>20</h1>
                        </div>

                        <div className='flex space-x-2'>
                            <div>
                                <h1 className='p-2 w-10  text-white bg-[#9dc4dd] rounded-lg z-10 relative font-bold flex justify-center items-center'>O+</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className='p-2 w-10 text-white bg-[#9dc4dd] rounded-lg z-10 relative font-bold flex justify-center items-center'>O-</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className='p-2 w-10 text-white bg-[#9dc4dd] rounded-lg relative font-bold flex justify-center items-center'>A+</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#ffccd4] p-5 w-80 shadow-lg rounded-xl`}>
                    <div className='flex justify-between items-center'>
                        <h1 className={`text-red-500 font-bold text-lg tracking-wide`}>Received</h1>
                        <h1 className={`text-red-500 font-bold text-xs tracking-wide`}>3 October 2023</h1>
                    </div>

                    <div className='flex justify-between items-end mt-2'>
                        <div>
                            <h1 className={`text-red-500 font-semibold `}>Total</h1>
                            <h1 className={`text-red-500 font-bold text-3xl `}>20</h1>
                        </div>

                        <div className='flex space-x-2'>
                            <div>
                                <h1 className='p-2 w-10  text-white bg-[#9dc4dd] rounded-lg z-10 relative font-bold flex justify-center items-center'>O+</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className='p-2 w-10 text-white bg-[#9dc4dd] rounded-lg z-10 relative font-bold flex justify-center items-center'>O-</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className='p-2 w-10 text-white bg-[#9dc4dd] rounded-lg relative font-bold flex justify-center items-center'>A+</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`bg-[#a2f8bb] p-5 w-80 shadow-lg rounded-xl`}>
                    <div className='flex justify-between items-center'>
                        <h1 className={`text-green-700  font-bold text-lg tracking-wide`}>In Stock</h1>
                        <h1 className={`text-green-700 font-bold text-xs tracking-wide`}>3 October 2023</h1>
                    </div>

                    <div className='flex justify-between items-end mt-2'>
                        <div>
                            <h1 className={`text-green-700  font-semibold `}>Total</h1>
                            <h1 className={`text-green-700  font-bold text-3xl `}>20</h1>
                        </div>

                        <div className='flex space-x-2'>
                            <div>
                                <h1 className='p-2 w-10  text-white bg-[#9dc4dd] rounded-lg z-10 relative font-bold flex justify-center items-center'>O+</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className='p-2 w-10 text-white bg-[#9dc4dd] rounded-lg z-10 relative font-bold flex justify-center items-center'>O-</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                            <div>
                                <h1 className='p-2 w-10 text-white bg-[#9dc4dd] rounded-lg relative font-bold flex justify-center items-center'>A+</h1>
                                <div className='h-[2.75rem] w-10 bg-white rounded-b-lg justify-center items-center flex z-0 -mt-2'>
                                    <h1>8</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Card;
