import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
const App = () => {
return (
<BrowserRouter>
 <div className='flex'>
    <Sidebar/>

<div className='w-full h-screen flex flex-col'>
    <Navbar/>

 <Routes>
    <Route />
    {/* <Route path='/' element={<Bodycharts/>}/> */}

 </Routes>
 </div>
 


 </div>
 </BrowserRouter>
   
)}

export default App