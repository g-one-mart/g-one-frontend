import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/ElectronicsStore/GW/New/1242x450.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/ElectronicsStore/GW/New/1242x450.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/ElectronicsStore/GW/New/1242x450.jpg"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}


export default ControlledCarousel;