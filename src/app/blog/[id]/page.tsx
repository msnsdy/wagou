import styles from "./Post.module.css";
import Image from "next/image";
import Link from "next/link";
import TwoColumn from "@/components/layout/TwoColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function Blog() {
  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ",
    },
    {
      href: "/blog/",
      text: "日々のこと",
    },
    {
      href: "/blog/1/",
      text: "日本茶との出会い",
    },
  ];

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <TwoColumn>
          <div className={styles.pagePost}>
            <Image
              className={styles.thumbnail}
              src="/blog/blog-image01.png"
              alt=""
              width="700"
              height="377"
            />
            <div className={styles.meta}>
              <a className={styles.category} href="/blog/">
                Colam
              </a>
              <p className={styles.date}>2024.6.6</p>
            </div>
            <h2 className={styles.title}>日本茶との出会い。</h2>
            <div className={styles.content}>
              <p>
                この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
              </p>
              <h2>見出し２</h2>
              <p>
                この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
              </p>
              <figure>
                <Image
                  src="/blog/post-image01.jpg"
                  alt=""
                  width="700"
                  height="377"
                />
              </figure>
              <h3>見出し3</h3>
              <p>
                この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
              </p>
            </div>
          </div>
        </TwoColumn>
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  );
}
