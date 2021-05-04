import React from "react";
import "./ContactPage.css";
import cv from '../ContactPage/Curriculum-vitae-of-Harry-Minnie-(EU).pdf'
function ContactPage() {
  return (
    <section class='contact-section' id='contact'>
      <h1 class='contact-header'>Contact Me</h1>
      <h3 class='work-status'>I am currently available to work.</h3>
      <p>
        If you have a project that you want to get started, think you need my
        help with something or just fancy saying hi? Then get in touch.
      </p>
      <div class='contact-form'>
        <form action='https://formspree.io/xqkdrkro' method='POST'>
          <input
            type='text'
            class='form-control'
            name='name'
            placeholder='Name'
            id='name'
            required
          />
          <br />
          <input
            type='text'
            class='form-control'
            name='E-mail'
            placeholder='E-mail'
            id='email'
            required
          />
          <br />
          <textarea
            name='message'
            class='form-control'
            id='textarea-input'
            placeholder='Message'
            id='message'
            required
          ></textarea>
          <br />
          <a class='status'>
            <div class='name-status'></div>
            <div class='email-status'></div>
            <div class='message-status'></div>
          </a>
          <input
            type='submit'
            class='form-control-submit-btn'
            value='Send Message'
          />
        </form>
      </div>

      <div class='social-media-tags'>
        <a href='https://github.com/HarryMinnie6' class='github'>
          <i class='fab fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/harry-minnie-5ab96bb4/'
          class='linkedIn'
        >
          <i class='fab fa-linkedin'></i>
        </a>
      </div>
      <div class='cv'>
        <a href={cv}> Download my CV</a>
      </div>
    </section>
  );
}

export default ContactPage;
