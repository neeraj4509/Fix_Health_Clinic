import React from 'react';
import heroImage from '../assets/images/hero-image.jpg'
import './Hero.css'; 

function Hero() {
  return (
    <div className="hero-section">
      <img src={heroImage} alt="Hero" />
    </div>
  );
}

export default Hero;
