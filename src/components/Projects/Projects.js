import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import { projects } from '../../data/Projects';

function Projects() {
  let dir_counter = 0,
    direction = 'row';
  return (
    <div className='main-div'>
      <h1 className='header'>My Projects</h1>
      {projects.map((project) => {
        dir_counter++;
        if (dir_counter % 2 === 0) direction = 'row-reverse';
        else direction = 'row';
        return (
          <ProjectCard
            title={project.title}
            content={project.content}
            link={project.link}
            image={project.image}
            direction={direction}
            key={dir_counter}
            stack={project.stack}
          />
        );
      })}
    </div>
  );
}

export default Projects;
