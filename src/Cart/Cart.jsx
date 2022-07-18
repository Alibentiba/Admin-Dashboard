import React, { useState } from 'react'
import './Cart.css'
import {useSelector,useDispatch} from 'react-redux'

export const Cart = () => {
     const [Qty,setQty]=useState("1")
     const dispatch = useDispatch()

    const car = useSelector(state=> state.counterstore.cart)


  const uniqueIds = [];

  const Cart = car.filter(element => {
    const isDuplicate = uniqueIds.includes(element.Id);
  
    if (!isDuplicate) {
      uniqueIds.push(element.Id);
  
      return true;
    }
  
    return false;
  });






  console.log("la crte de sdj",Cart);
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
    <th>Qty</th>
    <th>Subtotal</th>

  </tr>

       {
        Cart.map(({Id,imag,prix,cat,desc,rat,oldprix})=>{
            return( 
              
            <tr className='product-cart'key={Id}>
        
           <td className='product-item'><img src={imag} alt=""/></td> 
           <td className='prix'>{prix}</td>

           <td><input className='product-Qty' value={Qty} type="Number" onChange={e => setQty(e.target.value)
          
          
          
          
          }  placeholder="1"/></td> 

           <td><h4 className='prix-total'>${prix*Qty}</h4></td> 

           </tr>
                
               )
           
        })
       }
               </tbody>
</table>

    </div>
  )
}
