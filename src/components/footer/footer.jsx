import React, { useState } from 'react';
import './footer.css';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const renderAccordion = (title, key, items) => (
    <div className="footer-section" key={key}>
      <button
        className="footer-heading"
        onClick={() => toggleSection(key)}
      >
        <span>{title}</span>
        <span className="footer-icon">
          {openSection === key ? <FaChevronDown /> : <FaChevronRight />}
        </span>
      </button>

      <ul className={`footer-links ${openSection === key ? 'open' : ''}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {renderAccordion('Shop by', 'shop', [
          'Clearance Sale',
          'New In',
          'Beds',
          'Sofas',
          'Dining',
          'Mattresses',
          'Soft Furnishings',
        ])}

        {renderAccordion('Information', 'info', [
          'Lookbook',
          'About',
          'Blog',
          'Blog Details',
          'Theme FAQs',
          'Shipping & Returns',
        ])}

        {renderAccordion('Customer Service', 'service', [
          'Search Terms',
          'Advanced Search',
          'Orders and Returns',
          'Contact Us',
          'Theme FAQs',
          'Consultant',
          'Store Locations',
        ])}

        <div className="footer-newsletter">
          <h3>Newsletter Sign Up</h3>
          <p>Receive our latest updates about our products & promotions.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
