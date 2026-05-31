import styles from "./BlogSection.module.css";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/ui/BlogCard";

import { client } from "@/app/lib/microcms";

// 日々のこと記事の型定義
type Props = {
  id: string;
  title: string;
  thumbnail?: { url: string; width: number; height: number };
  category?: { id: string; name: string }[];
  publishedAt: string;
};

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: "blog", // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title,thumbnail,category,publishedAt", // idとtitleを取得
      limit: 3, // 最新の5件を取得
      orders: "-publishedAt",
    },
  });
  return data.contents;
}

export default async function BlogSection() {
  const posts = await getBlogPosts();

  return (
    <section className={styles.topBlog}>
      <Heading text="日々のこと" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {posts.map((post) => {
            return (
              <div className={styles.card} key={post.id}>
                <BlogCard
                  id={parseInt(post.id)}
                  src={post?.thumbnail?.url}
                  title={post.title}
                  categories={post?.category?.map((cat) => {
                    return {
                      id: parseInt(cat.id),
                      name: cat.name,
                    };
                  })}
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
