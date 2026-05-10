import styles from "./MenuModal.module.css";
import Image from "next/image";

type MenuModalProps = {
  src: string;
  title: string;
  text: string;
  commandfor: string;
};

export default function MenuModal({
  src,
  title,
  text,
  commandfor,
}: MenuModalProps) {
  return (
    <div className={styles.modal}>
      <Image
        src={src}
        alt=""
        width="300"
        height="225"
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <button
        type="button"
        commandfor={commandfor}
        command="close"
        className={styles.button}
      >
        閉じる
      </button>
    </div>
  );
}
