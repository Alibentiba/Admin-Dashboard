import React from 'react'
import "./Topproduct.css"
import { MdAddShoppingCart } from 'react-icons/md';
import { BsStar,BsEye } from 'react-icons/bs';
import { MdFavoriteBorder,MdContentCopy } from 'react-icons/md';


const Topproduct = () => {
  return (
    <div className='Topproduct'>

    <img src="http://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/product/cache/b37f1485fc1b751e8a0bcd5c14fd4efa/p/r/product_16_2.jpg" alt="" />

<p className='Topproduct-cat'>FEATURES</p>
<p className='Topproduct-desc'>Apple Vinegar</p>
<div className='Topproduct-buttons'>
    <div className='Topproduct-info'>
<p className='Topproduct-rat'><BsStar/><BsStar/></p>
<p className='Topproduct-prix'>$45674</p>
</div>
<div className='Topproduct-G-buttons'>
<button className='button-G'><MdFavoriteBorder className='G-icon'/></button>
<button className='button-G'><MdContentCopy className='G-icon'/></button>
<button className='button-G'><BsEye className='G-icon'/></button>

</div>
<button className='Topproduct-addtocart'><MdAddShoppingCart className='MdAddShoppingCart'/></button>
</div>



</div>





   
  )
}

export default Topproduct