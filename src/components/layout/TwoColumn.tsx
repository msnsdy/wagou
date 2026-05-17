import styles from "./TwoColumn.module.css";
import Sidebar from "./Sidebar";

export default function TwoColumn({ children }) {
  return (
    <div className={styles.twoColumn}>
      <article className={styles.main}>
        <div className={styles.content}>{children}</div>
      </article>
      <aside>
        <Sidebar />
      </aside>
    </div>
  );
}
