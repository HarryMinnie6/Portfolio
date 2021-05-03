import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <nav class="navigation-bar">
      <a href="javascript:void(0)" class="hamburger-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>

      <div class="nav-links">
        <ul>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#projects"> Projects</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
