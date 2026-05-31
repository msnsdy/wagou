import styles from "./BlogCard.module.css";

import Link from "next/link";
import Image from "next/image";

type Category = {
  id: number;
  name: string;
};

type BlogCardProps = {
  id: number;
  src: string;
  title: string;
  categories: Category[];
};

export default function BlogCard({
  id,
  src,
  title,
  categories,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={src}
          alt=""
          width="364"
          height="242"
          priority
          className={styles.image}
        />
        {categories.map((category) => {
          return (
            <p className={styles.category} key={category.id}>
              {category.name}
            </p>
          );
        })}
      </div>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
}
