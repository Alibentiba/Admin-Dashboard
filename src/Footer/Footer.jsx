import React from 'react'
import { FaTwitter,FaLinkedin,FaInstagram,FaFacebookSquare} from "react-icons/fa";

import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>

<div className='footer-top'>
    <span> <h1 className='T1'>SIGN UP MEDISINE NEWSLETTER</h1>
    <p className='T2'>Get in now with a 30% finance deal from bionic electronics.</p></span>
<div className='footer-sarch'>
     <input type="text" className='footer-search-input' placeholder="Enter keywords to search..."/>
     <button className='footer-sarch-button'> SUBSCRIBE</button>
     </div>

</div>

<div className='footer-center'>
    <div className='div1'>
    <img src="\images\logo.png" alt="" />
    <p>Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

    <p>Ut enim ad minim veniam, quis nostrud exeri itation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className='div2'>
<li> <h3>Contact Info</h3></li>
<li>Call us free:<br/><h2>1800 446 000</h2></li>

<li>561 Wellington Road, Street 32, San Francisco</li>
<li>Medisine@gmail.com</li>
<li>Hours: 10:00 - 18:00, Mon - Sat</li>
<li className='social-M'>
<FaTwitter className='social-icon'/>
<FaLinkedin className='social-icon'/>
<FaInstagram className='social-icon'/>
<FaFacebookSquare className='social-icon'/>
</li>


</div>
<div className='div3'>
<h3>Information</h3>

<li>About Us </li>
<li>My Account </li>
 <li>Privacy Polices</li>
<li>Terms & Conditions</li>
<li>Delivery Information</li>
<li>Customer Service</li>
</div>
<div className='div4'>
<h3>Quick Links</h3>

<li>Special Offers</li>
<li>Gift Cards </li>
 <li>F21 Red</li>
<li>Privacy Policy</li>
<li>Payment Method</li>
<li>Teams of Use</li>
<li>Track your order</li>
</div>
</div>
<div className='footer-bottom'>
  <img src="https://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/payments/payment-footer.jpg" alt="" />
<span>Medisine © 2020. All Rights Reserved. Designed by <a href="#">MagenTech.Com</a></span>
</div>




    </div>
  )
}

export default Footer