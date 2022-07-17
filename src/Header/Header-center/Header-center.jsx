import React from 'react'
import { AiOutlineSearch,AiOutlineUser} from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';
import {Link } from "react-router-dom";
import {useSelector} from 'react-redux'

import "./Header-center.css"

const Header_Center = () => {
  var cartt = useSelector(state=> state.counterstore.cart)
  return (
    <div className='Header-center'>
 <Link to="/"><img src="\images\logo.png" alt="" /></Link>
  
    <div className='hot-call'>
     <FaPhoneAlt className='hot-call-icon' />
     <div className='hot-call-text'>
           <p>CALL US FREE:</p>
           <h4>1-888-546-789</h4>
     </div>
    </div>
    <div className='sarch'>
     <input type="text" className='search-input' placeholder="Enter keywords to search..."/>
          <div className="dropdown-center" tabIndex="1">
          <button className='button-center'>ALL Categories<IoIosArrowDown/></button>
          <div className="dropdown-content-center" id='123'>
          <p className='dropdown-text'>kids</p>
          <p className='dropdown-text'>Elctro</p>
          <p className='dropdown-text'>Cloths</p>
          </div>
  </div>
     <button className='sarch-button'> <AiOutlineSearch className='search-icon'/></button>
     </div>
     <div className='Header-center-right'>
       <p className='number-favorits'>0</p>
     <MdFavoriteBorder className='Header-center-right-icon'/>
     <p className='number-buy'>{cartt.length}</p>
    <Link to='/Cart' className='Header-center-right-icon'>
    <FiShoppingCart className='cart-icon'/>
    </Link> 
     <AiOutlineUser className='Header-center-right-icon'/>

     <div className='Header-singin'>
       <p>MY ACCOUNT</p>
       <Link to="/Login"> <h6>Login/Register</h6></Link>


     </div>
     </div>
     </div>
  )
}

export default Header_Center