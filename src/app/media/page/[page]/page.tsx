import styles from "../../Media.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import MediaItem from "@/components/ui/MediaItem";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { client } from "@/app/lib/microcms";
import { formatDate } from "@/utils/date";
import { Pagination } from "@/components/layout/Pagination";
import { notFound } from "next/navigation";

const postPerPage = 10;

// 記事の型定義
type Props = {
  id: string;
  title: string;
  publishedAt: string;
};

// microCMSからブログ記事を取得
async function getMediaPosts(page: number): Promise<{
  posts: Props[];
  totalCount: number;
}> {
  const data = await client.get({
    endpoint: "media", // 'media'はmicroCMSのエンドポイント名
    queries: {
      fields: "id,title,publishedAt", // idとtitleを取得
      offset: (page - 1) * postPerPage,
      limit: postPerPage, // 最新の10件を取得
      orders: "-publishedAt",
    },
  });
  return {
    posts: data.contents,
    totalCount: data.totalCount,
  };
}

type MediaProps = {
  params: Promise<{ page: string }>;
};

export default async function Media({ params }: MediaProps) {
  const { page } = await params;
  const pageNumber = parseInt(page);
  const { posts, totalCount } = await getMediaPosts(pageNumber);

  if (posts.length === 0) {
    notFound();
  }

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
            <Pagination totalCount={totalCount} postPerPage={postPerPage} page={pageNumber} pagePath="/media/page/" />
          </div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}
