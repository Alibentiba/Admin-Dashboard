import React from 'react'
import Topproduct from '../Topproduct/Topproduct'
import "./Toplist.css"
const {products} = require("../Data.json");

const Toplist = () => {
  return (
    <div className='Toplist'>
        <h4 className='title-list'>Top on this Week</h4>
        <div className='toplist-product'>
  
        <div className='row'>
{products.map(({id,title,price,image},index)=>{

 return ( 
 <Topproduct title={title} key={id} price={price} image={image}/>
)

})

}
</div>
        </div>

    </div>
  )
}

export default Toplist