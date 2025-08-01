import React from 'react';
import { Link } from "react-router-dom";
import './hero.css';
import heroimg from '../../assets/hero-img.jpg'; // still needed for background

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroimg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h4>WELCOME TO ELEGENT ELM</h4>
          <h1>ELEVATE YOUR SPACE WITH SLEEK AND CHIC FURNITURE</h1>
          <Link to="/shop">
          <button className="hero-btn">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
