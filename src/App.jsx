import React from 'react'
import Baner from './Baner/Baner'
import Header from './Header/Header'
import Policy from "../src/Policy/Policy"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../src/App.css"
import Categories from "../src/Categories/Categories"
import Deal from './Deal/Deal';
import Filter from './Filter/Filter';
import Topproduct from './Topproduct/Topproduct';
import Toplist from './Toplist/Toplist';
function App() {
  return (
    <div className='App'>
      {/* <Header/>
      <Baner/>
      <Policy/> 
       <Deal/>
<Filter/> */}
{/* <Topproduct/> */}
<Toplist/>

    </div>
  )
}

export default App
