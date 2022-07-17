import React from 'react'
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";
import { Cart } from './Cart/Cart';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from "./Home"
import Login from './Login/Login';

function App() {
  return (
    <div className='App'>
    <Router>
      <Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/Login" element={<Login/>} />
<Route path="/Cart" element={<Cart/>} />

</Routes>
{/* <Footer/> */}
</Router>







    </div>
  )
}

export default App
