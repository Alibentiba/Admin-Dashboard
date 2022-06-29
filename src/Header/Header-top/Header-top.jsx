import React from 'react'
import "./Header-top.css"
import { RiAlertLine } from 'react-icons/ri';
// import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosMenu,IoIosArrowDown} from 'react-icons/io';

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

    <div className="dropdown-top" tabindex="1">
  <buton className='dd'>USD<IoIosArrowDown/></buton>
  <div className="dropdown-content-top" id='123'>
  <p className='dropdown-text'>EUR-EURO</p>
  <p className='dropdown-text'>DOL-USA</p>
  <p className='dropdown-text'>DIN-DZ</p>
  </div>
</div>
  
<div className="dropdown-top" tabindex="1">
  <buton className='dd'>EN<IoIosArrowDown/></buton>
  <div className="dropdown-content-top" id='123'>
  <p className='dropdown-text'>EN</p>
  <p className='dropdown-text'>FR</p>
  <p className='dropdown-text'>AR</p>

  </div>
</div>

    </div>
    </div>
  )
}

export default Header_top