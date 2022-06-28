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
      
    <div className="dropdown">
            <button className="dropbtn">
              <div className='menu-icon-div'><IoIosMenu className='menu-icon'/>
            </div>{option}<IoIosArrowDown/></button>
            <div className="dropdown-content">
            <a href="#" onClick={()=>shoseoption("link1")}>Link 1</a>
            <a href="#" onClick={()=>shoseoption("link2")}>Link 2</a>
            <a href="#"onClick={()=>shoseoption("link3")}>Link 3</a>
            </div> </div>
      <a href="">Home</a>
      <a href="">Features</a>
      <a href="">Shop</a>
      <a href="">Blog</a>
      <a href="">About Us</a>
      <a href="">Contact Us</a>
      
    </div>
  )
}

export default Header_bottom