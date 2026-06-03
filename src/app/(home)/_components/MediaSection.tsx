import styles from "./MediaSection.module.css";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Image from "next/image";
import MediaItem from "@/components/ui/MediaItem";
import { formatDate } from "@/utils/date";

import { client } from "@/app/lib/microcms";

// メディア情報記事の型定義
type Props = {
  id: string;
  title: string;
  publishedAt: string;
};

// microCMSからブログ記事を取得
async function getMediaPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: "media", // 'media'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title,publishedAt", // idとtitleを取得
      limit: 5, // 最新の5件を取得
      orders: "-publishedAt",
    },
  });
  return data.contents;
}

export default async function MediaSection() {
  const posts = await getMediaPosts();
  return (
    <section className={styles.topMedia}>
      <div className={styles.bgWrap}>
        <Image
          src="/common/logo-green.svg"
          alt=""
          width="614"
          height="614"
          className={styles.bg}
        />
      </div>
      <div className={styles.container}>
        <div className="p-top-medita__heading">
          <Heading text="メディア情報" />
        </div>
        <div className={styles.content}>
          <ul className={styles.list}>
            {posts.map((post) => {
              return (
                <li className={styles.item} key={post.id}>
                  <MediaItem
                    date={formatDate(post.publishedAt)}
                    title={post.title}
                  />
                </li>
              );
            })}
          </ul>
          <div className={styles.button}>
            <Button href="/media/" text="全てを見る" />
          </div>
        </div>
        <div className={styles.illustWrap}>
          <Image
            src="/top/media-illust.webp"
            alt=""
            width="130"
            height="136"
            className={styles.illust}
          />
        </div>
      </div>
    </section>
  );
}
