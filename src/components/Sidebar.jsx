import React from 'react'
import { FaDashcube } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import {setActiveMenu} from '../Redux/Slice'
import { links } from '../data/dummy';
import { useSelector,useDispatch } from 'react-redux';

const Sidebar = () => {
    const dispatch= useDispatch()
    var ActiveMenuS =useSelector(state=>state.userStore.ActiveMenu)
  return (
    <div className={` flex-col h-screen w-1/6 ${ActiveMenuS?'hidden':'flex'}`}>
        <div className='flex items-center gap-2 justify-between p-4 text-3xl font-bold '>
            <span className='flex'><FaDashcube className='text-orange-500'/>Admin</span>
            <span onClick={()=>{dispatch(setActiveMenu(true))}} className='rounded-full cursor-pointer p-1 hover:bg-gray-200 hover:text-gray-500'><AiFillCloseCircle/></span>
            
            </div>
            <div className='flex flex-col gap-6 overflow-x-hidden overflow-scroll' >
                {
                    links.map((item)=>{
                        return(
                          <div key={item.title} className='flex flex-col items-start justify-start gap-4 px-1  '>
                             <p className='text-2xl font-semibold'>{item.title}</p>
                             {
                                item.links.map((item2)=>{
                                    return (
                                    <div
                                    key={item2.name}
                                     className='flex flex-col items-start justify-center px-2 hover:bg-slate-600
                                     hover:text-orange-400

                                    rounded-sm w-full p-3'>
                                    <p className='flex text-xl items-center justify-center gap-2'>
                                      <span className='text-3xl '> {item2.icon}</span>  
                                      <span className='capitalize'>{item2.name}</span>
                                    </p>
                                    </div>)

                                })
                             }
                          </div>

                        )

                    })
                    }





</div>  
  </div>

  )
}

export default Sidebar
