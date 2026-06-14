import styles from "../../../../Blog.module.css";

import PageFirstView from "@/components/layout/PageFirstView";
import Breadcrumb from "@/components/layout/Breadcrumb";
import BlogCard from "@/components/ui/BlogCard";

import { client } from "@/app/lib/microcms";
import { Pagination } from "@/components/layout/Pagination";
import { notFound } from "next/navigation";

const postPerPage = 9;

// 日々のこと記事の型定義
type Props = {
  id: string;
  title: string;
  thumbnail?: { url: string; width: number; height: number };
  category?: { id: string; name: string }[];
  publishedAt: string;
};

// ページ番号をもとにmicroCMSから記事を取得
async function getBlogPosts(catId: number, page: number): Promise<{
  posts: Props[];
  totalCount: number;
}> {
  const data = await client.get({
    endpoint: "blog", // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title,thumbnail,category,publishedAt", // idとtitleを取得
      filters: `category[contains]${catId}`,
      offset: (page - 1) * postPerPage,
      limit: postPerPage, // 最新の9件を取得
      orders: "-publishedAt",
    },
  });
  return {
    posts: data.contents,
    totalCount: data.totalCount,
  };
}

type BlogProps = {
  params: Promise<{ id: string; page: string }>;
};

export default async function Blog({ params }: BlogProps) {
  const { id, page } = await params;
  const { posts, totalCount } = await getBlogPosts(
    parseInt(id),
    parseInt(page),
  );

  if (posts.length === 0) {
    notFound();
  }

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
          <Pagination
            totalCount={totalCount}
            postPerPage={postPerPage}
            page={parseInt(page)}
            pagePath={`/blog/category/${id}/page/`}
          />
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}
