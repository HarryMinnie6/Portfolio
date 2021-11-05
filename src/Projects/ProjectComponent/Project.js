import React from "react";
import "./Project.css";

function Project({
  project__name,
  project__image,
  project__description,
  made__using,
  github__link,
  demo__link,
}) {
  return (
    <div className='project'>
      <div className='header-wrapper'>
        <h3 className='project-header'>{project__name}</h3>
      </div>
      <div className='image-holder'>
        <img
          className='project-image'
          src={project__image}
          alt={project__name}
        />
      </div>
      <p className='project-description'>
        {project__description}
        <strong>
          <i>{made__using} </i>
        </strong>
      </p>
      <div className='button-links'>
        {github__link ? (
          <a className='github-link buttons' href={github__link}>
            Repo
          </a>
        ) : (
          ""
        )}

        {demo__link ? (
          <a className='project-link buttons' href={demo__link}>
            Demo
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Project;
