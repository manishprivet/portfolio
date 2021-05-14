import { FC } from "react";
import styles from "./Spinner.module.scss";

interface Props {
  text?: string;
  small?: boolean;
}

const Spinner: FC<Props> = ({ text, small }) => (
  <div className={`${styles.container} ${small ? styles.small : ""}`}>
    <div className={styles.loader} />
    {text && small ? <h4>{text}</h4> : <h3>{text}</h3>}
  </div>
);

export default Spinner;
