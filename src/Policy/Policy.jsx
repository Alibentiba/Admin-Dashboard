import React from 'react'
import "./Policy.css"
const Policy = () => {
  return (
    <div className='policy'>
    <div className='policy-item'>
      <img className='policy-img' src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/icon/icon-1.png" alt="" />
      <div className='policy-item-text'>
            <h4>Free Shipping</h4>
            <p>Free delivery to your home</p>
      </div>
    </div>
    <div className='policy-item'>
    <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/icon/icon-2.png"  alt=""/>
    <div className='policy-item-text'>
            <h4>Money Guarantee</h4>
            <p>30 days back</p>
      </div>
    </div>
    <div className='policy-item'>
    <img className="mark-lazy" src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/icon/icon-3.png"  alt=""/>
    <div className='policy-item-text'>
            <h4>Payment Method</h4>
            <p>Secure System</p>
      </div>

    </div>
    <div className='policy-item'>
    <img className="mark-lazy" src="http://magento2.magentech.com/themes/sm_medisine/pub/media/wysiwyg/icon/icon-4.png" alt=""/>
    <div className='policy-item-text'>
            <h4>Online Support</h4>
            <p>24 hours on day</p>
      </div>

    </div>
    </div>
  )
}

export default Policy