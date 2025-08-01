import React, { useState, useEffect, useRef } from 'react';
import './reviews.css';
import { FaTrophy, FaShieldAlt, FaBolt, FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const trustItems = [
  { icon: <FaTrophy />, title: 'Value For Money' },
  { icon: <FaBolt />, title: 'Shop With Confidence' },
  { icon: <FaShieldAlt />, title: 'Secure Payment' },
];

const reviews = [
  { text: 'Bought a bedding set, and the print looks exactly as shown on the website. Would definitely order again.', name: 'Maira Sarfraz' },
  { text: 'Sent a dinner set as a gift to my friend, she liked it. Would recommend buying a dinner set for loved ones.', name: 'Warda Zia' },
  { text: 'Got a pastry stand and it’s adorable. Recommended for every home decor occasion.', name: 'Faiza Malik' },
  { text: 'Absolutely love the new dining set! Great quality and fast delivery.', name: 'Ali Raza' },
  { text: 'The lamp I bought is so unique and gives a cozy glow. Highly recommended!', name: 'Sara Naveed' },
  { text: 'Superb craftsmanship on the wooden bench. Will order again.', name: 'Zain Ul Abideen' },
];

function Reviews() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const trackRef = useRef(null);

  const updateCardsPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setCardsPerView(3);
    } else if (width >= 768) {
      setCardsPerView(2);
    } else {
      setCardsPerView(1);
    }
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxIndex = reviews.length - cardsPerView;

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section className="reviews-section">
      <div className="trust-box">
        {trustItems.map((item, i) => (
          <div key={i} className="trust-item">
            {item.icon}
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="customer-reviews">
        <h2 className="reviews-heading">Hear From Our Customers!</h2>
        <div className="carousel-wrapper">
          <button className="nav-button prev" onClick={handlePrev} disabled={index === 0}>
            <FiChevronLeft />
          </button>

          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              ref={trackRef}
              style={{ transform: `translateX(-${index * (100 / cardsPerView)}%)` }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="review-card">
                  <div className="stars">
                    {[...Array(5)].map((_, j) => <FaStar key={j} className="star" />)}
                  </div>
                  <p className="review-text">{review.text}</p>
                  <strong className="reviewer-name">{review.name}</strong>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-button next" onClick={handleNext} disabled={index >= maxIndex}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
