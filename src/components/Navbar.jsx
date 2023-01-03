import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { InputText } from 'primereact/inputtext';
import { GrLanguage } from 'react-icons/gr';
import { MdOutlineDarkMode } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiMessage } from 'react-icons/bi';
import { CgMenuLeftAlt } from 'react-icons/cg';
import {setActiveMenu} from '../Redux/Slice'
import { Link } from 'react-router-dom';




const Navbar = () => {
    const dispatch= useDispatch()
    const [Value, setValue] = useState('')
    var ActiveMenuS =useSelector(state=>state.userStore.ActiveMenu)
  
  return (

    <div className='w-full h-36 flex flex-col items-center justify-around border-b-[1px] px-2 md:flex-row'>
      {/* Search div */}
      <div className='w-full md:w-1/3'>
         <span className="p-righticon flex items-center justify-center ">
            < InputText className='w-full h-10b bg-slate-600 text-white text-xl'
            id="in" placeholder='Search' value={Value} onChange={(e) => setValue(e.target.value)} />
          </span>
      </div>

      {/* Left div */}
      <div className='w-full flex items-center justify-end gap-3 text-3xl pr-5 text-white'>
     <Link to='/ListData'> 
        <button className=' bg-white flex items-center justify-center gap-1 p-2 rounded-full hover:bg-gray-200 hover:text-blue-400 '><GrLanguage /></button>
     </Link>
      <button className=' p-2 rounded-full hover:bg-gray-200 hover:text-blue-400'><MdOutlineDarkMode/></button>
      <button className='p-2 rounded-full hover:bg-gray-200 hover:text-blue-400'><IoMdNotificationsOutline/></button>
      <button className='p-2 rounded-full hover:bg-gray-200 hover:text-blue-400'> <BiMessage/></button>
      <button className='p-2 rounded-full hover:bg-gray-200 hover:text-blue-400 lg:hidden '> <CgMenuLeftAlt onClick={()=>{dispatch(setActiveMenu(!ActiveMenuS))}}/></button>
      <img className='w-[45px] object-cover rounded-full h-[45px] hidden md:flex'
      src="https://static.wikia.nocookie.net/disney/images/3/3e/Denzel_Washington.jpg/revision/latest?cb=20191227233245"/>


      








      </div>

     

    </div>
  )
}

export default Navbar
