import React from "react";
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Us</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>sahil.mahajan@ajiledone.com</h5>
          <a href="mailto:sahil.mahajan@ajiledone.com" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <FaLinkedin className="contact__option-icon" />
          <h4>LinkedIn</h4>
          {/* <h5>coding</h5> */}
          <a href="https://www.linkedin.com/in/ajile-minds/" target="_blank">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <h5>+91 8851976742</h5>
          <a href="https://api.whatsapp.com/send?phone=8851976742&text=Hello" target="_blank">Send a message</a>
        </article>
      </div>

      <form action="mailto:anish21@ajiledone.com">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>;
};

export default Contact;
