import React from "react";
import "./SkillsPage.css";

function SkillsPage() {
  return (
    <section className='skills-section'>
      <h2 className='h2-skills'>What I can do</h2>
      <div className='skills'>
        <div
          className='design-description description-div'
          data-aos='zoom-in-up'
          data-aos-delay='200'
          data-aos-anchor-placement='top-bottom'
        >
          <i className='fas fa-pencil-alt'></i>
          <h3>Design</h3>
          <p className='p-description'>
            A website should be designed for the people who will use it, so
            that's exactly what I do. I value simple content structure. My goals
            are to focus on typography, clean design patterns, and thoughtful
            interactions.
          </p>
        </div>

        <div
          className='front-end-description description-div'
          data-aos='zoom-in-up'
          data-aos-delay='100'
          data-aos-anchor-placement='top-bottom'
        >
          <i className='fas fa-laptop-code'></i>
          <h3>Front End</h3>
          <p className='p-description'>
            I like coding things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>

          <h4>Languages I use:</h4>
          <p className='p-languages'>HTML, CSS, JavaScript/jQuery, Node.js</p>
          <h5 className='frameworks'>FrameWorks:</h5>
          <p>React</p>

          <div className='dev-tools-wrapper'>
            <h4>Dev Tools:</h4>
            <p>Visual Studio Code</p>
            <p>Terminal</p>
            <p>Git</p>
            <p>Github</p>
            <p>npm</p>
            <p>Bootstrap 5</p>
            <p>Material UI</p>
          </div>
        </div>

        <div
          className='learning-description description-div'
          data-aos='zoom-in-up'
          data-aos-delay='200'
          data-aos-anchor-placement='top-bottom'
        >
          <i className='fas fa-graduation-cap'></i>
          <h3>Currently learning</h3>
          <p className='p-description'>
            I am currently increasing my knowledge within the following areas:
          </p>
          <div className='dev-tools-wrapper'>
            <p>React-Native</p>
            <p>Python</p>
            <p>PostgreSQL (Proficient)</p>
            <p>MongoDB (Proficient)</p>
            <p>SQL (Proficient)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
