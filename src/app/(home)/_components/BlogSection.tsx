import styles from "./BlogSection.module.css";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Link from "next/link";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  const cards = [
    {
      href: "/blog",
      src: "/top/blog-image01.webp",
      category: "Column",
      title: "日本茶との出会い",
    },
    {
      href: "/blog",
      src: "/top/blog-image02.webp",
      category: "Events",
      title: "言葉を超えて、五感で味わいあう。",
    },
    {
      href: "/blog",
      src: "/top/blog-image03.webp",
      category: "Farm",
      title: "まちの一つとして、ここにあること。お店を始めて芽生えた思い",
    },
  ];

  return (
    <section className={styles.topBlog}>
      <Heading text="日々のこと" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {cards.map((card, index) => {
            return (
              <div className={styles.card} key={index}>
                <BlogCard
                  href={card.href}
                  src={card.src}
                  category={card.category}
                  title={card.title}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.button}>
          <Button href="/blog" text="一覧へ" />
        </div>
      </div>
    </section>
  );
}
