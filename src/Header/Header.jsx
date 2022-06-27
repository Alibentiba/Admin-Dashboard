import React from 'react'
import { RiAlertLine } from 'react-icons/ri';
import './Header.css'
const Header = () => {
  return (
    <div className='Header'>


    <div  className='Header-top'>

    <div className='Header-top-left'>
    <button><RiAlertLine className='alert-icon'/>Covid-19 alert</button>
    <span>Stay at home if you feel unwell.</span>
   </div>
    <div className='Header-top-right'>

    </div>
    </div>




   <div className='Header-center'>

   </div>


    <div className='Header-bottom'>

    </div>




    </div>
  )
}

export default Header