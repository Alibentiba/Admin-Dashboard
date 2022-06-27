import React, { useState } from 'react'
import { RiAlertLine } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineSearch,AiOutlineUser} from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';


import './Header.css'

const Header = () => {
  const [option,setoption]=useState('All Categories')
  const shoseoption=(opname)=>{
   setoption(opname)

  }
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
       <div className='sarch'>
        <input type="text" className='search-input' placeholder="Enter keywords to search..."/>
        
          <div class="dropdown">
            <button class="dropbtn">{option}<IoIosArrowDown/></button>
            <div class="dropdown-content">
            <a href="#" onClick={()=>shoseoption("link1")}>Link 1</a>
            <a href="#" onClick={()=>shoseoption("link2")}>Link 2</a>
            <a href="#"onClick={()=>shoseoption("link3")}>Link 3</a>
            </div>
          </div>
        <button className='sarch-button'> <AiOutlineSearch className='search-icon'/></button>
        </div>
        <div className='Header-center-right'>
          <p className='number-favorits'>0</p>
        <MdFavoriteBorder className='Header-center-right-icon'/>
        <p className='number-buy'>0</p>
        <FiShoppingCart className='Header-center-right-icon'/>
        <AiOutlineUser className='Header-center-right-icon'/>

        <div className='Header-singin'>
          <p>MY ACCOUNT</p>
          <h6>Login/Register</h6>
         

        </div>



        </div>





   </div>


    <div className='Header-bottom'>

    </div>




    </div>
  )
}

export default Header