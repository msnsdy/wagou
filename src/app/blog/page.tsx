import styles from "./Blog.module.css";

import PageFirstView from "@/components/layout/PageFirstView";
import Breadcrumb from "@/components/layout/Breadcrumb";
import BlogCard from "@/components/ui/BlogCard";
import Image from "next/image";
import Link from "next/link";

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
      limit: 9, // 最新の5件を取得
      orders: "-publishedAt",
    },
  });
  return data.contents;
}

export default async function Blog() {
  const posts = await getBlogPosts();

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
