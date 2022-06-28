import React from 'react'
import "./Header-top.css"
import { RiAlertLine } from 'react-icons/ri';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>

    </div>
    </div>
  )
}

export default Header_top