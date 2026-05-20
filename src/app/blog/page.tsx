import styles from "./Blog.module.css";

import PageFirstView from "@/components/layout/PageFirstView";
import Breadcrumb from "@/components/layout/Breadcrumb";
import BlogCard from "@/components/ui/BlogCard";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
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

  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ",
    },
    {
      href: "/blog/",
      text: "日々のこと",
    },
  ];

  return (
    <>
      <PageFirstView text="日々のこと" />

      <article className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.cards}>
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
          <div className={styles.pagination}>
            <Link className={`${styles.arrow} ${styles.prev}`} href="/blog/">
              <Image
                src="/common/page-arrow.svg"
                alt=""
                width="9"
                height="13"
                className={styles.arrowImage}
              />
            </Link>
            <div className={styles.numbers}>
              <Link
                className={`${styles.number} ${styles.isCurrent}`}
                href="/blog/"
              >
                1
              </Link>
              <Link className={styles.number} href="/blog/">
                2
              </Link>
              <Link className={styles.number} href="/blog/">
                3
              </Link>
              <Link className={styles.number} href="/blog/">
                4
              </Link>
              <Link className={styles.number} href="/blog/">
                5
              </Link>
            </div>
            <Link className={`${styles.arrow} ${styles.prev}`} href="/blog/">
              <Image
                src="/common/page-arrow.svg"
                alt=""
                width="9"
                height="13"
                className={styles.arrowImage}
              />
            </Link>
          </div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}
