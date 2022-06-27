import React from 'react'
import { RiAlertLine } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';

import './Header.css'
// import { Dropdown } from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <div className='Header'>


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

   <div className='Header-center'>
       <img src="\images\logo.png" alt="" />
       <div className='hot-call'>
        <FaPhoneAlt className='hot-call-icon' />
        <div className='hot-call-text'>
              <p>CALL US FREE:</p>
              <h4>1-888-546-789</h4>
        </div>
       </div>
   </div>


    <div className='Header-bottom'>

    </div>




    </div>
  )
}

export default Header