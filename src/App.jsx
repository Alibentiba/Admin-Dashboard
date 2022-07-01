import React from 'react'
import Baner from './Baner/Baner'
import Header from './Header/Header'
import Policy from "../src/Policy/Policy"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../src/App.css"
import Categories from "../src/Categories/Categories"
import Deal from './Deal/Deal';
function App() {
  return (
    <div className='App'>
      {/* <Header/>
      <Baner/>
      <Policy/> */}
      {/* <Categories/> */}
<Deal/>


    </div>
  )
}

export default App
