import React from 'react'
import "./Product.css"
import { BsStar,BsEye } from 'react-icons/bs';
import { MdFavoriteBorder,MdContentCopy } from 'react-icons/md';


const Product = ({imag,prix,cat,desc,rat,oldprix}) => {
  return (
    <div className='Product'>

<img src={imag} alt="" className='Product-img'/>
<div className='Product-info'>
    <p className='Product-cat'>{cat}</p>
    <p className='Product-desc'>{desc}</p>
    <p className='Product-rat'><BsStar/><BsStar/><BsStar/></p>
    <p className='Product-prix'>${prix}</p>
    <div className='Product-shop' >

    </div>
    <div className='product-buttons'>

<button className='add-cart'>ADD to cart</button>
<div className='product-buttons-group'>
<button className='G-button'><MdFavoriteBorder className='G-button-icon'/></button>
<button className='G-button'><MdContentCopy className='G-button-icon'/></button>
<button className='G-button'><BsEye className='G-button-icon'/></button>
</div>
</div>


</div>

    </div>
  )
}

export default Product