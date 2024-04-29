import React from 'react'
import './Hero.css'
import b2 from '../Assets/b2.jpg';
import b4 from '../Assets/b4.jpg';
import b5 from '../Assets/b5.jpg';
import b6 from '../Assets/b6.jpg';
import Carousel from 'react-bootstrap/Carousel';
const Hero = () => {
  return (
    <Carousel className='hero'>
    <Carousel.Item>
      <img src={b2} alt="" />
      <Carousel.Caption>
        <h3>New arrival</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img src={b4} alt="" />
      <Carousel.Caption>
        <h3>Goleçào Glam
        </h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={b5} alt="" />
      <Carousel.Caption>
        <h3>Wrap</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src={b6} alt="" />
      <Carousel.Caption>
        <h3>Wrap</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}


export default Hero
