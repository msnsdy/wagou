import styles from "./BlogCard.module.css";

import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  href: string;
  src: string;
  category: string;
  title: string;
};

export default function BlogCard({
  href,
  src,
  category,
  title,
}: BlogCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={src}
          alt=""
          width="364"
          height="242"
          priority
          className={styles.image}
        />
        <p className={styles.category}>{category}</p>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
}
