import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import TextLoop from "react-text-loop";
import styles from "./Profile.module.scss";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Profile() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileText}>
        <h1>
          <span className={styles.hello}>Hello</span>
          <br />
          My name is Manish...
        </h1>
        <h2>I'm a student at IIIT Gwalior</h2>
        <h2>
          and a{" "}
          <TextLoop>
            <span style={{ color: "#ff8906" }}>Web Developer</span>
            <span style={{ color: "var(--button-color)" }}>
              Graphic Designer
            </span>
            <span style={{ color: "#f9bc60" }}>Cloud Architect</span>
          </TextLoop>{" "}
        </h2>
        <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
          Resume <FaCloudDownloadAlt className='tooltip-svg' />
        </a>
      </div>
      <ProfilePhoto />
    </div>
  );
}

export default Profile;
