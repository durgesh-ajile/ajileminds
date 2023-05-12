import React from "react";
import "./about.css";
import ME from '../../assests/me-about.jpg'
import AjileDone from '../../assests/mindslogo.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { motion } from "framer-motion";
import 'animate.css';

const About = () => {
  return <section id="about">
    <h5>Get To Know</h5>
    <h2 className="animate__rubberBand">About Us</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={AjileDone} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <motion.article
            whileHover={{ scale: 1.1 }}
            className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>1.3+ Years working</small>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.1 }}
            className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>60+ Worldwide</small>
          </motion.article>
          <motion.article
            whileHover={{ scale: 1.1 }}
            className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>30+ Completed</small>
          </motion.article>
        </div>

        <p>Ajile Minds focuses on providing our clients with best-in-class IT services. We specialize in Web development & Blockchain-based solutions for the Clients. We are constantly striving to deliver effective services by leveraging domain business knowledge, best-in-class techniques, and teams of technical specialists.</p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>;
};

export default About;
