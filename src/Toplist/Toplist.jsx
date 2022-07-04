import React from 'react'
import Topproduct from '../Topproduct/Topproduct'
import "./Toplist.css"
const Toplist = () => {
  return (
    <div className='Toplist'>
        <h4 className='title-list'>Top on this Week</h4>
        <div className='toplist-product'>
    <div className='row'>
    <Topproduct/>
        <Topproduct/>
        <Topproduct/>
        <Topproduct/>
    </div>
       
        <div className='row'>
        <Topproduct/>
        <Topproduct/>
        <Topproduct/>
        <Topproduct/>
</div>
       


        </div>

    </div>
  )
}

export default Toplist