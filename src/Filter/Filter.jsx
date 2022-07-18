import React from 'react'
import Slider from "react-slick";
import "./Filter.css"
import Product from '../Product/Product';
const Filter = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const x="http://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/product/cache/b37f1485fc1b751e8a0bcd5c14fd4efa/p/r/product_18.jpg"
      const y='http://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/product/cache/b37f1485fc1b751e8a0bcd5c14fd4efa/p/r/product_19_1.jpg'
      const z="http://magento2.magentech.com/themes/sm_medisine/pub/media/catalog/product/cache/b37f1485fc1b751e8a0bcd5c14fd4efa/p/r/product_2_1.jpg"
      return (
        <div className='Filter'>

        <div className='sl'>
        <h3>New Arrivals</h3>
          <Slider className='slider'{...settings}>
            <div className='element'>
              <Product Id='111' imag={x} prix='456.55' cat="Shop" desc='best prodect from the mai'  oldprix="455.23" />
            </div>
            <div className='element'>
              <Product Id="222" imag={y} prix='456.55' cat="Shop" desc='best prodect from the mai'  oldprix="455.23" />
            </div>
            <div className='element'>
              <Product Id="333"  imag={z} prix='456.55' cat="Shop" desc='best prodect from the mai' oldprix="455.23" />
            </div>
          </Slider>
        </div>
        <div className='sl'>
        <h3>New Arrivals</h3>
          <Slider className='slider'{...settings}>
            <div className='element'>
              <Product Id="222" imag={y} prix='456.55' cat="Shop" desc='best prodect from the mai'  oldprix="455.23" />
            </div>
            <div className='element'>
              <Product Id='111'imag={x} prix='456.55' cat="Shop" desc='best prodect from the mai'  oldprix="455.23" />
            </div>
            <div className='element'>
              <Product Id="333" imag={z} prix='456.55' cat="Shop" desc='best prodect from the mai' oldprix="455.23" />
            </div>
          </Slider>
        </div>
        <div className='sl'>
        <h3>New Arrivals</h3>
          <Slider className='slider'{...settings}>
            <div className='element'>
              <Product Id="333" imag={z} prix='456.55' cat="Shop" desc='best prodect from the mai'  oldprix="455.23" />
            </div>
            <div className='element'>
              <Product Id="222" imag={y} prix='456.55' cat="Shop" desc='best prodect from the mai'  oldprix="455.23" />
            </div>
            <div className='element'>
              <Product Id="111" imag={x} prix='456.55' cat="Shop" desc='best prodect from the mai' oldprix="455.23" />
            </div>
          </Slider>
        </div>
        </div>

      );
    }
  

export default Filter