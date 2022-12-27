import React, { useEffect, useState } from 'react'
import Widget from './Widget'
// import { FaUserTie,MdOutlineShoppingBasket } from 'react-icons/fa';
import { TbCurrencyDollar } from 'react-icons/tb';
import { MdAccountBalanceWallet,MdOutlineShoppingBasket } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';
import CountUp from 'react-countup';



const Bodycharts = () => {
  const [Users, setUsers] = useState(null);
  const [Orders, setOrders] = useState(null);
  const [Eranings, setEranings] = useState(null);
  const [balance, setbalance] = useState(null);

  useEffect(() => {
     setUsers(<CountUp end={656}/>) 
     setOrders(<CountUp end={234534}/>)
     setEranings(<CountUp end={89056}/>)
     setbalance(<CountUp end={7892354}/>) 
 
 

  
  }, []);





  return (
    <div className='grid grid-cols-1 w-full gap-3 p-3  md:grid-cols-2 lg:grid-cols-4'>
      <Widget title='Users' percentag='34' number={Users} icone={<FiUsers/>} bgcolor='#ffc4d5' color='#ff1c5c'/>
      <Widget title='Orders' percentag='34' number={Orders} icone={<MdOutlineShoppingBasket/>} bgcolor='#faddaa' color='#faa30c'/>
      <Widget title='Eranings' percentag='34' number={Eranings} icone={<TbCurrencyDollar/>} bgcolor='#d3fcae' color='#76f705'/>
      <Widget title='balance' percentag='34' number={balance} icone={<MdAccountBalanceWallet/>} bgcolor='#e9c2fc' color='#a702fa'/>
    </div>
  )
}

export default Bodycharts