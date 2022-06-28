import React from 'react'
import "./Header-top.css"
import { RiAlertLine } from 'react-icons/ri';

const Header_top = () => {
  return (
    <div  className='Header-top'>
    <div className='Header-top-left'>
    <button><RiAlertLine className='alert-icon'/>Covid-19 alert</button>
    <span>Stay at home if you feel unwell.</span>
   </div>
    <div className='Header-top-right'>
    <span> Store Location</span>
    <span> Track your orders</span> 
    </div>
    </div>
  )
}

export default Header_top