import DevIcons from "../DevIcons/DevIcons";
import { stacks } from "../../data/Technologies";
import styles from "./Technologies.module.scss";

const Technologies = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Technologies I know</h1>
        <DevIcons className={styles.largeIcon} stacks={stacks.sort()} />
      </div>
    </div>
  );
};

export default Technologies;
