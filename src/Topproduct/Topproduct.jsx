import React from 'react'
import "./Topproduct.css"
import { MdAddShoppingCart } from 'react-icons/md';
import { BsStar,BsEye } from 'react-icons/bs';
import { MdFavoriteBorder,MdContentCopy } from 'react-icons/md';


const Topproduct = ({id,title,price,image,category}) => {
  return (
    <div className='Topproduct'>

    <img src={image} alt="" />

<p className='Topproduct-cat'>{category}</p>
<p className='Topproduct-desc'>{title}</p>
<div className='Topproduct-buttons'>
    <div className='Topproduct-info'>
<p className='Topproduct-rat'><BsStar/><BsStar/></p>
<p className='Topproduct-prix'>${price}</p>
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