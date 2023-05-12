import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assests/me.png";
import AjileDone from '../../assests/AjileLogo.png'
import HeaderSocials from "./HeaderSocials";
import 'animate.css';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
// import Particles from "react-tsparticles";

import Particles from "../../components/Particles";
const Header = () => {
  
  return (
    <header>
      <div className="container header__container">
      <Particles/>
        <h2>Hello We're</h2>
        {/* <h1>Coder</h1> */}
        <div className="typerwriter">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                'Coders.',
                'Designers.',
                'Developers.'
              ],
            }}
          />
        </div>
        {/* <h2 className="text-light animate__bounceIn">Fullstack Developer</h2> */}
        <CTA />
        <div className="header-style">
          <div>
        <HeaderSocials />
        </div>
        <div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          drag="x"
          className="me">
          <img src={AjileDone} alt="me" />
        </motion.div>
        </div>
        <div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
