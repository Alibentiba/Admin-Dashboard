import React from 'react'
import Widget from './Widget'
// import { FaUserTie,MdOutlineShoppingBasket } from 'react-icons/fa';
import { TbCurrencyDollar } from 'react-icons/tb';
import { MdAccountBalanceWallet,MdOutlineShoppingBasket } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';



const Bodycharts = () => {
  return (
    <div className='grid grid-cols-1 w-full gap-3 p-3  md:grid-cols-2 lg:grid-cols-4'>
      <Widget title='Users' percentag='34' number='45678' icone={<FiUsers/>} bgcolor='#ffc4d5' color='#ff1c5c'/>
      <Widget title='Orders' percentag='34' number='45678' icone={<MdOutlineShoppingBasket/>} bgcolor='#faddaa' color='#faa30c'/>
      <Widget title='Eranings' percentag='34' number='45678' icone={<TbCurrencyDollar/>} bgcolor='#d3fcae' color='#76f705'/>
      <Widget title='balance' percentag='34' number='45678' icone={<MdAccountBalanceWallet/>} bgcolor='#e9c2fc' color='#a702fa'/>
    </div>
  )
}

export default Bodycharts