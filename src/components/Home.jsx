import React from 'react'
import Bodycharts from './Bodycharts'
import Charts from './Charts'
import Feauture from './Feauture'

const Home = () => {
  return (
    <div className='w-full flex flex-col items-start justify-start gap-8'>
        <Bodycharts/>
        <Feauture/>
        </div>
  )
}

export default Home