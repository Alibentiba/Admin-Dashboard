import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Bodycharts from './components/Bodycharts'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

const App = () => {
return (
 <div className='flex'>
    <Sidebar/>

<div className='w-full h-screen flex flex-col gap-3 '>
    <Navbar/>
    <BrowserRouter>

    <Home/>

 <Routes>
    <Route />
    {/* <Route path='/' element={<Bodycharts/>}/> */}

 </Routes>
 </BrowserRouter>
 </div>




 </div>
   
)}

export default App