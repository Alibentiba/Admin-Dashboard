import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import './Baner.css'

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\images\item-1--fQ8nEE.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\images\item-2--QozTbC.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="\images\item-3--AqW663.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
    
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;