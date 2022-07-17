import React from 'react'
import Slider from "react-slick";
import "./Brands.css"
const {Brand} = require("../Data.json");

const Brands = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='Brands'>
    <div className='Brands-slider'>
    <h3 className='Brands-title'>Featured Brands</h3>

  <Slider className='slider'{...settings}>
{
Brand.map((item,index)=>{
  return <div className='element' key={index}>
  <img src={item.image} alt="gfgh" key={index} className='Brands-img'/>
</div>
})



    }
    
  </Slider>
</div>
































</div>









  )
}

export default Brands