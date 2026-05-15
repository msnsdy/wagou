import styles from "./MediaItem.module.css";

type MediaItemProps = {
  date: string;
  title: string;
};

export default function MediaItem({ date, title }: MediaItemProps) {
  return (
    <div className={styles.item}>
      <p className={styles.date}>{date}</p>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
