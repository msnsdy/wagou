import styles from "./Media.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import MediaItem from "@/components/ui/MediaItem";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { client } from "@/app/lib/microcms";
import { formatDate } from "@/utils/date";
import { Pagination } from "@/components/layout/Pagination";
import { defaultOpenGraph, siteName } from "@/app/lib/metadata";

export const metadata = {
  title: "メディア情報",
  description: "メディア情報一覧ページです。",
  openGraph: {
    ...defaultOpenGraph,
    title: `メディア情報 | ${siteName}`,
    description: "メディア情報一覧ページです。",
    url: "/media/",
  },
};

const postPerPage = 10;

// 記事の型定義
type Props = {
  id: string;
  title: string;
  publishedAt: string;
};

// microCMSからブログ記事を取得
async function getMediaPosts(): Promise<{
  posts: Props[];
  totalCount: number;
}> {
  const data = await client.get({
    endpoint: "media", // 'media'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title,publishedAt", // idとtitleを取得
      offset: 0,
      limit: postPerPage, // 最新の12件を取得
      orders: "-publishedAt",
    },
  });
  return {
    posts: data.contents,
    totalCount: data.totalCount,
  };
}

export default async function Media() {
  const { posts, totalCount } = await getMediaPosts();

  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ",
    },
    {
      href: "/media/",
      text: "メディア情報",
    },
  ];

  return (
    <>
      <PageFirstView text="メディア情報" />

      <article className={styles.media}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
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
            <Pagination
              totalCount={totalCount}
              postPerPage={postPerPage}
              page={1}
              pagePath="/media/page/"
            />
          </div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}
