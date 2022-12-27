import React from 'react'
import { HiDotsVertical } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
 
const Feauture = () => {
  return (
    <div className='w-1/3 m-2  flex flex-col items-start justify-start shadow-lg shadow-gray-400 p-4 gap-3'>
        {/* Top */}
        <div className='text-xl font-semibold text-gray-600 w-full flex justify-between items-center'>
            <span>Totale Revenue</span> 
            <HiDotsVertical/>
            </div>
            {/* Center */}
        <div className='w-full flex  flex-col items-center gap-1 justify-center'>
        <div style={{ width: 180, height: 180 }}>
         <CircularProgressbar value={40} text={`70%`} strokeWidth='5'/>
        </div>
        <p className='text-lg text-gray-500'>Totale  sales made today</p>
        <p className='text-4xl font-semibold'>$ 420</p>

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
  )
}

export default Feauture