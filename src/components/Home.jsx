import React from 'react'
import Bodycharts from './Bodycharts'
import Charts from './Charts'
import Feauture from './Feauture'
import Table from './Table'

const Home = () => {
  
  return (
    <div className='w-full h-screen flex flex-col items-start justify-start gap-4 pb-10 overflow-x-hidden'>
        <Bodycharts/>
        <Feauture/>
        <Table/>
        
        </div>
  )
}

export default Home