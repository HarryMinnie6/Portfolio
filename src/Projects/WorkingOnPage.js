import React from "react";
import Project from "./ProjectComponent/Project";
import "./ProjectsPage.css";

function WorkingOnPage() {
  return (
    <section class="projects-section" id="projects">
      <h2 class="misc-header">Projects I am currently working on</h2>
      <div class="projects-holder">
        <Project />
      </div>
      <p class="wp-request">
        The above projects are being developed daily and are currently not live.
      </p>
      <p class="wp-request">
        <i>Two Custom WordPress themes available on request</i>
      </p>
    </section>
  );
}

export default WorkingOnPage;
