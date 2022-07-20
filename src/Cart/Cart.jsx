import React, { useState } from 'react'
import './Cart.css'
import {useSelector,useDispatch} from 'react-redux'

import { FaTrashRestore,FaPlus,FaMinus } from 'react-icons/fa';
import { RemovCart, upQty,incre ,dincre} from '../Redux/Slice';

export const Cart = () => {
     const [Qty,setQty]=useState("1")
     const dispatch = useDispatch()

    const Cart = useSelector(state=> state.counterstore.cart)

  console.log("la crte de sdj",Cart.lenght);
const changeQty=(e)=>{
  setQty(Qty=e.target.value)}
  console.log("la cart est",Cart);

  return (
    
    <div className='Cart'>

      <table>
      <tbody>

  <tr className='product-cart TT'>
    <th className='product-item'>Item</th>
    <th>Price</th>
    <th className='Qty-info'>Qty</th>
    <th>Subtotal</th>
    <th>Setings</th>

  </tr>
 
  
  

       {
        Cart.map(({Id,imag,prix,cat,desc,rat,oldprix,cartQuantity})=>{
            return( 
            
                
               <tr className='product-cart'key={Id}>
        
              <td className='product-item'><img src={imag} alt=""/></td> 
              <td className='prix'>{prix}</td>
   
              <td className='Qty-info'>
              <button className='product-Qty' onClick={() =>dispatch(dincre({Id,imag,prix,cat,desc,rat,oldprix}))}><FaMinus/></button>

              <button className='product-Qty-number'>{cartQuantity}</button>
                <button className='product-Qty' onClick={() =>dispatch(incre({Id,imag,prix,cat,desc,rat,oldprix}))}><FaPlus/></button>
               
              
   
   
     
             </td> 
   
              <td><h4 className='prix-total'>${prix*cartQuantity}</h4></td> 
              <td><h4 className='prix-total'><FaTrashRestore className='removbutton' onClick={() =>dispatch(RemovCart({Id,imag,prix,cat,desc,rat,oldprix}))}/></h4></td> 
   
              </tr>
            
              
              
           
               )
            
        })
       }
               </tbody>
</table>
<div className='summary'>
  <h4>SUMMARY</h4>
<span className='summary-info'><p>Subtotal</p><p>$4554</p></span>
<span className='summary-info'><p>Shipping (Flat Rate - Fixed)</p><p>$4554</p></span>

<span className='summary-info'><p>Order Total	</p><p>$4554</p></span>
<button className='summary-button'>PROCEED TO CHECKOUT</button>

</div>
    </div>
  )
}
