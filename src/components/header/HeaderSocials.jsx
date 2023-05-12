import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ajile-minds/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="mailto:sahil.mahajan@ajiledone.com" target="_blank">
        <AiOutlineMail />
      </a>
      <a href="https://www.instagram.com/ajile.minds/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
