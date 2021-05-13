import styles from "./ProjectCard.module.scss";
import Tilt from "react-tilt";
import { projectType } from "../../interfaces";
import DevIcons from "../DevIcons/DevIcons";
import { Button, ButtonAlternate } from "../Primitives/Button";
import { RoundedImage } from "../Primitives/Images";
import { LinkToNewTab } from "../Primitives/Link";

function ProjectCard({
  title,
  content,
  link,
  image,
  direction,
  stack,
  github,
}: projectType) {
  return (
    <div className={styles.main} style={{ flexDirection: direction }}>
      <div className={styles.description}>
        <div className={styles.cardText}>
          <h1>{title}</h1>
          <h3>{content}</h3>
          <DevIcons className={styles.devicon} stacks={stack} />
          <br />
          <LinkToNewTab href={link}>
            <Button>See Live</Button>
          </LinkToNewTab>
          {github && (
            <LinkToNewTab href={github}>
              <ButtonAlternate>View Code</ButtonAlternate>
            </LinkToNewTab>
          )}
        </div>
      </div>
      <div className={styles.image}>
        <Tilt className='Tilt' options={{ max: 10, scale: 1 }}>
          <div className='Tilt-inner'>
            <div className={styles.cardImageDiv}>
              <RoundedImage src={`images/${image}`} alt='' />
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default ProjectCard;
