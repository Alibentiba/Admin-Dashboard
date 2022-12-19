import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Bodycharts from './components/Bodycharts'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
const App = () => {
return (
<BrowserRouter>
 <div className='App flex text-white'>
    <Sidebar/>

<div className='w-full h-screen flex flex-col'>
    <Navbar/>
<div className='bg-blue-500 h-8/10'>
 <Routes>
    <Route />
    <Route path='/' element={<Bodycharts/>}/>

 </Routes>
 </div>
 <h3>Footer</h3>
 </div>

 </div>
 </BrowserRouter>
   
)}

export default App