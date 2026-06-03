import styles from "./Sidebar.module.css";
import Image from "next/image";
import { formatDate } from "@/utils/date";
import { client } from "@/app/lib/microcms";

// 日々のこと記事の型定義
type Props = {
  id: string;
  title: string;
  publishedAt: string;
};

// microCMSからブログ記事を取得
async function getLatestBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: "blog", // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title,publishedAt", // idとtitleを取得
      limit: 5, // 最新の5件を取得
      orders: "-publishedAt",
    },
  });
  return data.contents;
}

export default async function Sidebar() {
  const posts = await getLatestBlogPosts();

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
          {posts.map((post) => {
            return (
              <a href={`/blog/${post.id}/`} className={styles.item} key={post.id}>
                <time className={styles.itemDate}>{formatDate(post.publishedAt)}</time>
                <p className={styles.itemTitle}>{post.title}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
