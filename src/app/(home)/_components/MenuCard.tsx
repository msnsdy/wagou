import styles from "./MenuCard.module.css";
import Image from "next/image";

type MenuCardProps = {
  src: string;
  title: string,
  commandfor: string,
};

export default function MenuCard({src, title, commandfor}:MenuCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt=""
        width="300"
        height="255"
        className={styles.image}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <button
          type="button"
          className={styles.button}
          commandfor={commandfor}
          command="show-modal"
        >
          詳細へ
        </button>
      </div>
    </div>
  );
}
