import React, { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineSearch,AiOutlineUser} from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowDown,IoIosMenu } from 'react-icons/io';
import './Header.css'
import Header_top from './Header-top/Header-top'
import Header_center from './Header-center/Header-center';
import Header_bottom from './Header-bottom/Header-bottom';

const Header = () => {

  return (
    <div className='Header'>
<Header_top/>
<Header_center/>
<Header_bottom/>




   
    </div>
  )
}

export default Header