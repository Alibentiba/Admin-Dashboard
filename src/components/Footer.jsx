import React from 'react'
import { IoSettingsSharp } from 'react-icons/io5';

import { TooltipComponent } from '@syncfusion/ej2-react-popups'
const Footer = () => {
  return (
    <div className='w-full h-20  flex items-center justify-end'>
        <TooltipComponent content="Menu" position='BottomLeft'>
            <div className='flex items-end justify-end p-4 mx-10 rounded-full text-2xl  bg-blue-600'>
              <button>
              <IoSettingsSharp/>
              </button>
            </div>
        
        
        
        </TooltipComponent>

      
    </div>
  )
}

export default Footer
