import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Details</h2>
        <p><span className="icon">📍</span> 28 Green Tower, Street Name, New York City, USA</p>
        <p><span className="icon">📞</span> +92 035 18872937</p>
        <p><span className="icon">📞</span> +92 036 28392730</p>
        <p><span className="icon">✉️</span> Elegent-elmemail@gmail.com</p>
        <p><span className="icon">✉️</span> Elegent-elm@gmail.com</p>
        <p><span className="icon">🌐</span> www.elegentelm.com</p>
        <h3>Send Message</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your name here..." required />
          <input type="email" placeholder="Your email here..." required />
          <textarea placeholder="Your comment here..." rows="4" required></textarea>
          <button type="submit">Submit Message</button>
        </form>
      </div>

      <div className="contact-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.502316771979!2d-122.34205628436917!3d47.609722979184404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906abed6e7f6ef%3A0x46cd3c5e05e25994!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1614702328993!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
