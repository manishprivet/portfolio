import styles from "./styles.module.scss";
import { LinkToNewTab } from "../Primitives/Link";

const Blog = () => {
  return (
    <section className={styles.infoContainer}>
      <h2>Sometimes I also write blogs 🗒</h2>
      <p>
        on{" "}
        <LinkToNewTab href='https://medium.com/@manishprivet' withIcon>
          Medium
        </LinkToNewTab>{" "}
        or on my Personal Blogging Site{" "}
        <LinkToNewTab href='https://blog.manishk.dev' withIcon>
          Codex
        </LinkToNewTab>
      </p>
    </section>
  );
};

export default Blog;
