import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <section class="landing-section" id="home">
      <div>
        <p class="p1" data-aos="fade-down-right" data-aos-duration="1500">
          I'm
        </p>
        <h3 class="name" data-aos="flip-right" data-aos-duration="1000">
          Harry Minnie.
        </h3>
        <p class="p2" data-aos="fade-up-left" data-aos-duration="1500">
          A front-end developer
        </p>
      </div>
      <img class="landing-image" src="images/image3-cutout.png" alt="" />
    </section>
  );
}

export default LandingPage;
