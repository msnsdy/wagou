import styles from "./FlowCard.module.css";

import Image from "next/image";

type FlowCardProps = {
  src: string;
  number: string,
  title: string;
  text: string;
};

export default function FlowCard({ src, number, title, text }: FlowCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt=""
        width="250"
        height="333"
        className={styles.image}
      />
      <div className={styles.body}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>
          {text}
        </p>
      </div>
    </div>
  );
}
