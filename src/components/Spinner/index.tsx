import { FC } from "react";
import styles from "./Spinner.module.scss";

interface Props {
  text?: string;
}

const Spinner: FC<Props> = ({ text }) => (
  <div className={styles.container}>
    <div className={styles.loader} />
    {text && <h3>{text}</h3>}
  </div>
);

export default Spinner;
