import React from "react";
import "./LandingPage.css";
import landingPageImage from '../LandingPage/image3-cutout.jpg'

function LandingPage() {
  return (
    <section className="landing-section" id="home">
      <div>
        <p className="p1" data-aos="fade-down-right" data-aos-duration="1500">
          I'm
        </p>
        <h3 className="name" data-aos="flip-right" data-aos-duration="1000">
          Harry Minnie.
        </h3>
        <p className="p2" data-aos="fade-up-left" data-aos-duration="1500">
          A front-end developer
        </p>
      </div>
      <img className="landing-image" src={landingPageImage} alt="" />
    </section>
  );
}

export default LandingPage;
