import styles from "./canvas.module.css";
export const Canvas = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
