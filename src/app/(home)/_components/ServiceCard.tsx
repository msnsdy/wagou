import styles from "./ServiceCard.module.css";
import Image from "next/image";

type ServiceCardProps = {
  src: string;
  title: string;
  href: string;
};

export default function ServiceCard({ src, title, href }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={src}
        width="464"
        height="255"
        alt=""
      />
      <h3 className={styles.title}>{title}</h3>
      <a href={href} className={styles.link}>
        詳しくはこちら
      </a>
    </div>
  );
}
