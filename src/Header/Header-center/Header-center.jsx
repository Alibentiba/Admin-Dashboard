import React from 'react'
import { AiOutlineSearch,AiOutlineUser} from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import "./Header-center.css"

const Header_center = () => {
  return (
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
  )
}

export default Header_center