
//       const product=["http://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/category/cat-1_4.jpg",
//     "https://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/category/cat-2.jpg",
//     "https://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/category/cat-5.jpg",
// "https://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/category/cat-2.jpg",
// "https://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/category/cat-5.jpg",
// ,"https://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/category/cat-5.jpg",
// ,"https://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/category/cat-5.jpg",
// ]

import React, { Component } from "react";
import Slider from "react-slick";
import "./Categories.css"
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
      <div className="sl">
        <Slider className="Slider" {...settings}>
          <div className="D1">
            <h3>1</h3>
          </div>
          <div className="D2">
            <h3>2</h3>
          </div>
          <div className="D3">
            <h3>3</h3>
          </div>
          <div className="D4">
            <h3>4</h3>
          </div>
          <div className="D5">
            <h3>5</h3>
          </div >
          <div className="D6">
            <h3>6</h3>
          </div>
          <div className="D7">
            <h3>7</h3>
          </div>
          <div className="D8">
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}