import { FC } from "react";
import styles from "./Spinner.module.scss";

const Spinner: FC<unknown> = () => (
  <div className={styles.container}>
    <div>
      {Array(9)
        .fill(null)
        .map((_) => (
          <div />
        ))}
    </div>
  </div>
);

export default Spinner;
