import React, { useEffect, useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import CountUp from 'react-countup';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Charts from './Charts';
 
const Feauture = () => {
const [Conter, setConter] = useState(null);
useEffect(() => {
   setConter(<CountUp end={65654}/>) 

}, []);



  return (
    <div className='w-full flex flex-col gap-4 p-4 lg:flex-row'>

    <div className='w-[100%] h-full  flex flex-col  items-start justify-start shadow-lg shadow-gray-400 p-1 gap-3 md:h-full lg-[35%]'>
        {/* Top */}
        <div className='text-xl font-semibold text-gray-300 w-full flex justify-between items-center'>
            <span>Totale Revenue</span> 
            <HiDotsVertical/>
            </div>
            {/* Center */}
        <div className='w-full flex  flex-col items-center gap-1 justify-center'>
        <div style={{ width: 180, height: 180 }}>
         <CircularProgressbar value='70' text={`70%`} strokeWidth='5'/>
        </div>
        <p className='text-lg text-gray-300'>Totale  sales made today</p>
        <p className='text-4xl font-semibold text-gray-300'>$ {Conter}</p>

        </div>
        {/* Bottom */}
        <div className='w-full flex items-center justify-between'>
            <p className='flex flex-col items-center justify-center'>
                <span className='text-gray-500 font-semibold'>Target</span>
                <span className='flex font-semibold text-red-500'><IoIosArrowDown/>$12.5K</span>
            </p>
            <p className='flex flex-col items-center justify-center'>
                <span className='text-gray-500 font-semibold'>Last Week</span>
                <span className='flex font-semibold text-green-600'><IoIosArrowDown/>$12.5K</span>
            </p>
            <p className='flex flex-col items-center justify-center'>
                <span className='text-gray-500 font-semibold'>Last Month</span>
                <span className='flex font-semibold text-green-600'><IoIosArrowDown/>$12.5K</span>
            </p>
        </div>

    

        </div>
        {/* Chart component */}
        <div className='w-full'>
        <Charts/>

        </div>
        
    </div>
  )
}

export default Feauture