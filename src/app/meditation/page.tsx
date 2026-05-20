import styles from "./Meditation.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Image from "next/image";

export default function Meditation() {
  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ"
    },
    {
      href: "/meditation/",
      text: "茶・メディテーション"
    }
  ];

  return (
    <>
      <PageFirstView text="茶・メディテーション" />

      <article className={styles.meditation}>
        <div className={styles.container}>
          <OneColumn>
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
            </p>
            <h2>見出し2</h2>
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
            </p>
            <figure>
              <Image
                src="/blog/post-image01.jpg"
                alt=""
                width="600"
                height="400"
              />
            </figure>
            <h3>見出し3</h3>
            <p>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
            </p>
          </OneColumn>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}