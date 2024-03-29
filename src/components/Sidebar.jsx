import React, { useEffect, useState } from 'react'
import { FaDashcube } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Button } from 'primereact/button';


import {setActiveMenu} from '../Redux/Slice'
import { links } from '../data/dummy';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const dispatch= useDispatch()
    var ActiveMenuS =useSelector(state=>state.userStore.ActiveMenu)
    const [dataN, setdataN] = useState(null);
    



  return (
    <div className={` flex-col h-screen absolute z-50 w-1/2 md:relative md:w-1/6 py-2  text-white border-r-[1px] border-gray-300 bg-black ${ActiveMenuS?'hidden ':'flex'}`}>
      {/* Sidebar Top Div  */}
      <Link to='/'> <div className='flex items-center gap-2 justify-between p-4 text-3xl  font-bold cursor-pointer '>
            <span className='flex'><FaDashcube className='text-orange-500 '/>Admin</span>
            <span onClick={()=>{dispatch(setActiveMenu(!ActiveMenuS))}} className='rounded-full md:hidden cursor-pointer p-1 opacity-75'><AiFillCloseCircle/></span>
            
            </div>
            <div className='flex items-center justify-center p-3'>
            <img className='w-[60px] object-cover rounded-full h-[60px]  md:hidden'
      src="data:image/jpeg;base64,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" alt="fggth" />
     
            </div></Link> 
            {/* Sidebar center Div  */}
            <div className='flex flex-col gap-2 overflow-x-hidden overflow-scroll scrollbar-hide' >
                {
                    links.map((item)=>{
                        return(
                          <div key={item.title} className='flex flex-col items-start justify-start gap-2 px-1  '>
                             <p className='text-lg'>{item.title}</p>
                             {
                                item.links.map((item2)=>{
                                    return (
                                    <div
                                    key={item2.name}
                                     className='flex flex-col items-start justify-center px-2 cursor-pointer hover:bg-slate-200
                                     hover:text-orange-400

                                    rounded-sm w-full py-2'>
                                    <p className='flex text-lg items-center justify-center gap-2'>
                                      <span className='text-3xl text-blue-400 '> {item2.icon}</span>  
                                      <span className='capitalize font-semibold'>{item2.name}</span>
                                    </p>
                                    </div>)

                                })
                             }
                          </div>

                        )
})}



{/* Sidebar Bottom Div  */}

</div>  
<div className=' flex  flex-col gap-4 items-start p-4 '>

 {/* <Button label="Logout" className="px-5 py-1 rounded-sm  text-lg bg-gray-300" /> */}
 {/* <Button variant="contained" color=''>Logout</Button> */}
 <Button variant="outlined" color="error">
 Logout
</Button></div>
  </div>

  )
}

export default Sidebar
