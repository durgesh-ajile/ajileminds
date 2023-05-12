import React from 'react'
import './footer.css'
// import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Ajile Minds</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/ajile-minds/"><FaLinkedin /></a>
                <a href="https://www.instagram.com/ajile.minds/"><FiInstagram /></a>
                <a href="mailto:sahil.mahajan@ajiledone.com" target="_blank">
                    <AiOutlineMail />
                </a>            </div>

            <div className="footer__copyright">
                <small>&copy;  Ajile Minds. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer