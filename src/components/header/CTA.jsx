import React from "react";
import CV from "../../assests/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      {/* <a href="{CV}" download className="btn btn__hover__effect">
        Download CV
      </a> */}
      <a href="#contact" className="btn btn-primary btn__hover__effect">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
