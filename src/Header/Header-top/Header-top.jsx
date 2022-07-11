import React from 'react'
import "./Header-top.css"
import { RiAlertLine } from 'react-icons/ri';
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
  <p className='dropdown-text-top'>EUR-EURO</p>
  <p className='dropdown-text-top'>DOL-USA</p>
  <p className='dropdown-text-top'>DIN-DZ</p>
  </div>
</div>
  
<div className="dropdown-top" tabindex="1">
  <buton className='dd'>EN<IoIosArrowDown/></buton>
  <div className="dropdown-content-top" id='123'>
  <p className='dropdown-text-top'><img src="http://magento2.magentech.com/themes/sm_medisine/pub/static/version1622432025/frontend/Sm/medisine/en_US/images/flags/flag_french.svg" alt="" /> FRENCH</p>
  <p className='dropdown-text-top'><img src="http://magento2.magentech.com/themes/sm_medisine/pub/static/version1622432025/frontend/Sm/medisine/en_US/images/flags/flag_german.svg" alt="" />German</p>
  <p className='dropdown-text-top'><img src="http://magento2.magentech.com/themes/sm_medisine/pub/static/version1622432025/frontend/Sm/medisine/en_US/images/flags/flag_argentina.svg" alt="" />Argentina</p>
  <p className='dropdown-text-top'><img src="http://magento2.magentech.com/themes/sm_medisine/pub/static/version1622432025/frontend/Sm/medisine/en_US/images/flags/flag_belgium.svg" alt="" />Belgium</p>




  </div>
</div>

    </div>
    </div>
  )
}

export default Header_top