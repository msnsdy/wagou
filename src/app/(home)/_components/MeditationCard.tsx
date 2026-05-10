import styles from "./Meditation.module.css";
import Image from "next/image";

type MeditationCardProps = {
  src: string;
  title: string;
};

export default function MeditationCard({ src, title }: MeditationCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt=""
        width="260"
        height="180"
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}
