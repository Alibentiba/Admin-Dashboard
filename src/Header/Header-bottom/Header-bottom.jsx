import React, { useState } from 'react'
import './Header-bottom.css'
import { IoIosMenu,IoIosArrowDown} from 'react-icons/io';


const Header_bottom = () => {
  const [option,setoption]=useState('All Categories')
  const shoseoption=(opname)=>{
   setoption(opname)

  }
  return (
    <div className='Header-bottom'>
      <div className='img1'>
       <img src="https://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/megamenu/icons/hot.png" alt="" />
      </div>
      <div className='img2'>
<img src="https://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/megamenu/icons/sale.png" alt="" />
      </div>
      
    <div className="dropdown-bottom">
            <button className="dropbtn">
              <div className='menu-icon-div'><IoIosMenu className='menu-icon'/>
            </div>{option}<IoIosArrowDown/></button>
            <div className="dropdown-content">
            <a href="#" className='dropdown-link' onClick={()=>shoseoption("link1")}>Link 1</a>
            <a href="#" className='dropdown-link' onClick={()=>shoseoption("link2")}>Link 2</a>
            <a href="#"className='dropdown-link' onClick={()=>shoseoption("link3")}>Link 3</a>
            </div> </div>
      <li href="">Home</li>
      <li href="">Features</li>
      <li href="">Shop</li>
      <li href="">Blog</li>
      <li href="">About Us</li>
      <li href="">Contact Us</li>
      
    </div>
  )
}

export default Header_bottom