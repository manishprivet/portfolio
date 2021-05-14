import Github from "../Github";
import styles from "./styles.module.scss";

const ThingsAboutMe = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Stuff about me</h1>
        <Github />
      </div>
    </div>
  );
};

export default ThingsAboutMe;
