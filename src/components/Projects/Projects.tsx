import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { projects } from "../../data/Projects";

function Projects() {
  let dir_counter = 0,
    direction: "row" | "row-reverse" = "row";
  return (
    <div className={styles.container}>
      <h1>My Projects</h1>
      {projects.map((project) => {
        dir_counter++;
        if (dir_counter % 2 === 0) direction = "row-reverse";
        else direction = "row";
        return (
          <ProjectCard {...project} direction={direction} key={dir_counter} />
        );
      })}
    </div>
  );
}

export default Projects;
