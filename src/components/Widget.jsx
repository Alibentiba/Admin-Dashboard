import React from 'react'
import { IoIosArrowUp } from 'react-icons/io';



const Widget = ({title,percentag,number,icone,bgcolor,color}) => {
  return (
    <div className=' border-[1px] rounded-lg shadow-lg shadow-gray-400 h-40 flex flex-col items-start justify-between p-3'>
   
    <div className='flex text-xl justify-between items-center w-full '>
        <p className='text-gray-500 font-semibold uppercase'>{title}</p>
        <p className='text-green-400 flex items-center justify-center'><IoIosArrowUp/>{percentag}%</p>
    </div>

    <div className='text-4xl font-normal  w-full'>
        <p className='flex gap-1'>
            <span className={`${title=='Users'?'hidden':'flex' }`}>$</span>
            {number}</p>
    </div>

    <div className='flex text-md justify-between items-center w-full font-semibold '>
         <p className='text-gray-500'>See All {title}</p>
         <p style={{background:bgcolor,color:color}}
         className='rounded-md p-2'>
            {icone}
            </p>
    </div>

  </div>
  )
}

export default Widget