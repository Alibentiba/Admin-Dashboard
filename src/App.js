import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Bodycharts from './components/Bodycharts'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import BasicTable from './components/Table'
import DataTableLazyDemo from './components/ListData'
import ListData from './components/ListData'
import Single from './components/Single'

const App = () => {
return (
   <BrowserRouter>
 <div className='flex'>
    <Sidebar/>
   

<div className='w-full h-screen flex flex-col gap-3 '>
<Navbar/> 
 <Routes>
    <Route />
    <Route path='/' element={<Home/>}/>
    <Route path="/ListData" element={<ListData/>}/>
    <Route path="/user/:id" element={<Single/>}/>

 </Routes>

 </div>




 </div>
 </BrowserRouter>
)}

export default App