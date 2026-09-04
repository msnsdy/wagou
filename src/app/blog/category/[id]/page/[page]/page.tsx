import styles from "../../../../Blog.module.css";

import PageFirstView from "@/components/layout/PageFirstView";
import Breadcrumb from "@/components/layout/Breadcrumb";
import BlogCard from "@/components/ui/BlogCard";

import { client } from "@/app/lib/microcms";
import { Pagination } from "@/components/layout/Pagination";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { defaultOpenGraph, siteName } from "@/app/lib/metadata";

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
async function getBlogPosts(
  catId: number,
  page: number,
): Promise<{
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

// 絞り込み済みの記事からカテゴリー名を取得（各記事に対象のカテゴリーが含まれる)
// 記事が1件もない場合など、見つからなければ undefined を返す。
function getCategoryName(posts: Props[], catId: string): string | undefined {
  // 各記事の category（無ければ空配列）を1つの配列に平坦化
  const allCategories = posts.flatMap((post) => post.category ?? []);
  // その中から id が一致するカテゴリーを探し、その name を返す
  return allCategories.find((cat) => cat.id === catId)?.name;
}

type BlogProps = {
  params: Promise<{ id: string; page: string }>;
};

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  // read route params
  const { id, page } = await params;
  const { posts, totalCount } = await getBlogPosts(parseInt(id), parseInt(page));
  const categoryName = getCategoryName(posts, id) ?? "カテゴリー";

  return {
    title: `「${categoryName}」の記事一覧 | 日々のこと`,
    description: `日々のこと「${categoryName}」の記事一覧ページです。`,
    openGraph: {
      ...defaultOpenGraph,
      title: `「${categoryName}」の記事一覧 | 日々のこと | ${siteName}`,
      description: `日々のこと「${categoryName}」の記事一覧ページです。`,
      url: "/reservation/",
    },
  };
}

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
