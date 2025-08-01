import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Discover our story, values, and what makes us different.</p>
      </div>

      <div className="about-content">
        <section>
          <h2>Our Story</h2>
          <p>
            Blandit massa, eleifend eget morbi morbi in eleifend gravida in id lorem erat donec ipsum nunc est et arcu dolor ut enim mi eu tempus, maecenas pharetra eget pretium ultrices mollis facilisi.
            Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa eu consequat ultricies accumsan, a magna morbi egestas augue proin sagittis, sit neque volutpat nisi elit mattis aenean eget eget facilisis massa duis volutpat purus diam nec at orci lacinia lectus id enim diam vivamus euismod nibh venenatis.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            Blandit massa, eleifend eget morbi morbi in eleifend gravida in id lorem erat donec ipsum nunc est et arcu dolor ut enim mi eu tempus, maecenas pharetra eget pretium ultrices mollis facilisi.
            Arcu erat turpis sed ullamcorper viverra amet, vel laoreet massa eu consequat ultricies accumsan, a magna morbi egestas augue proin sagittis, sit neque volutpat nisi elit mattis aenean eget eget facilisis massa duis volutpat purus diam nec at orci lacinia lectus id enim diam vivamus euismod nibh venenatis.
          </p>
        </section>

        <section>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Craftsmanship that lasts
                Every piece of furniture is thoughtfully designed and meticulously crafted using premium materials to ensure it stands the test of time.</li>
            <li>Sustainable & eco-friendly
                We care about the planet as much as your home. Our products use responsibly sourced wood and eco-conscious finishes.</li>
            <li>Designed for your lifestyle
                From modern minimalism to classic comfort, our collections are made to fit seamlessly into any space and style.</li>
            <li>Custom-made options
                Create furniture that’s truly yours with our bespoke design services and customizable finishes.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
