import React, { useState } from 'react'
import './Cart.css'
import {useSelector} from 'react-redux'

export const Cart = () => {
     const [Qty,setQty]=useState(1)
    const Cart = useSelector(state=> state.counterstore.cart)
const changeQty=()=>{setQty(Qty)}
  return (
    <div className='Cart'>
      <table>
  <tr className='product-cart TT'>
    <th className='product-item'>Item</th>
    <th>Price</th>
    <th>Qty</th>
    <th>Subtotal</th>

  </tr>

       {
        Cart.map(({id,imag,prix,cat,desc,rat,oldprix})=>{
            return( 
              
            <tr className='product-cart'key={id}>
        
           <td className='product-item'><img src={imag} alt=""/></td> 
           <td className='prix'>{prix}</td>

           <td><input className='product-Qty' type="Number" placeholder={Qty}/></td> 
           {/* <td><h2 className='prix'>10</h2></td>  */}

           <td><h4 className='prix-total'>${prix*Qty}</h4></td> 

           </tr>
                
               )
           
        })
       }
         </table>

    </div>
  )
}
