import styles from "./ContactMe.module.scss";
import { LinkToNewTab } from "../Primitives/Link";
import { SocialMediaLinks } from "../../data/SocialMediaLinks";

function ContactMe() {
  return (
    <div className={styles.contactCard}>
      <h1 className={styles.header}>Contact Me</h1>
      <div className={styles.social}>
        {SocialMediaLinks.map((obj) => (
          <LinkToNewTab className={styles.link} href={obj.url}>
            <obj.icon className={styles.icon} fill='var(--button-text-color)' />
          </LinkToNewTab>
        ))}
      </div>
    </div>
  );
}

export default ContactMe;
