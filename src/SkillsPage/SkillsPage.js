import React from "react";
import "./SkillsPage.css";

function SkillsPage() {
  return (
    <section class="skills-section">
      <h2 class="h2-skills">What I can do</h2>
      <div class="skills">
        <div
          class="design-description description-div"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <i class="fas fa-pencil-alt"></i>
          <h3>Design</h3>
          <p class="p-description">
            A website should be designed for the people who will use it, so
            that's exactly what I do. I value simple content structure. My goals
            are to focus on typography, clean design patterns, and thoughtful
            interactions.
          </p>
        </div>

        <div
          class="front-end-description description-div"
          data-aos="zoom-in-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-bottom"
        >
          <i class="fas fa-laptop-code"></i>
          <h3>Front End</h3>
          <p class="p-description">
            I like coding things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>

          <h4>Languages I use:</h4>
          <p class="p-languages">HTML, CSS, JavaScript/jQuery, Node.js</p>
          <h5 class="frameworks">FrameWorks:</h5>
          <p>React</p>

          <div class="dev-tools-wrapper">
            <h5>Dev Tools:</h5>
            <p>Visual Studio Code</p>
            <p>Terminal</p>
            <p>Git</p>
            <p>Github</p>
            <p>npm</p>
            <p>Bootstrap 4</p>
          </div>
        </div>

        <div
          class="learning-description description-div"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          <i class="fas fa-graduation-cap"></i>
          <h3>Currently learning</h3>
          <p class="p-description">
            I am currently increasing my knowledge within the following areas:
          </p>
          <div class="dev-tools-wrapper">
            <p>PostgreSQL (Proficient)</p>
            <p>MongoDB (Proficient)</p>
            <p>React-Native</p>
            <p>PHP (Proficient)</p>
            <p>WordPress (Proficient)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
