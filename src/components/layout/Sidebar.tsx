import styles from "./Sidebar.module.css";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.reserve}>
        <a href="/reservation/" className={styles.reserveLink}>
          <Image
            src="/blog/reservation-image.webp"
            alt="ご予約はこちら"
            width="300"
            height="183"
            className={styles.reserveImage}
          />
        </a>
      </div>
      <div className={styles.widget}>
        <h3 className={styles.widgetTitle}>最近の投稿</h3>
        <div className={styles.list}>
          <a href="/blog/post.html" className={styles.item}>
            <time className={styles.itemDate}>2026/6/6</time>
            <p className={styles.itemTitle}>日本茶との出会い</p>
          </a>
          <a href="/blog/post.html" className={styles.item}>
            <time className={styles.itemDate}>2026/6/6</time>
            <p className={styles.itemTitle}>日本茶との出会い</p>
          </a>
          <a href="/blog/post.html" className={styles.item}>
            <time className={styles.itemDate}>2026/6/6</time>
            <p className={styles.itemTitle}>日本茶との出会い</p>
          </a>
          <a href="/blog/post.html" className={styles.item}>
            <time className={styles.itemDate}>2026/6/6</time>
            <p className={styles.itemTitle}>日本茶との出会い</p>
          </a>
          <a href="/blog/post.html" className={styles.item}>
            <time className={styles.itemDate}>2026/6/6</time>
            <p className={styles.itemTitle}>日本茶との出会い</p>
          </a>
        </div>
      </div>
    </div>
  );
}
