import Gaming from "../Gaming";
import Github from "../Github";
import Spotify from "../Spotify";
import Blog from "../Blog";
import styles from "./styles.module.scss";
import Achievements from "../Achievemnts";

const ThingsAboutMe = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Stuff about me</h1>
        <Spotify />
        <hr />
        <Gaming />
        <hr />
        <Blog />
        <hr />
        <Achievements />
        <hr />
        <Github />
      </div>
    </div>
  );
};

export default ThingsAboutMe;
