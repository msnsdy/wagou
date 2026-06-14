import styles from "./Post.module.css";
import Image from "next/image";
import Link from "next/link";
import TwoColumn from "@/components/layout/TwoColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { client } from "@/app/lib/microcms";
import dayjs from "dayjs";
import { notFound } from "next/navigation";

// ブログ記事の型定義
type Props = {
  id: string;
  thumbnail?: { url: string; width: number; height: number };
  title: string;
  contents: string;
  publishedAt: string;
  category: { name: string };
};

// microCMSから特定の記事を取得
async function getBlogPost(id: string): Promise<Props | null> {
  try {
    const data = await client.get({
      endpoint: `blog/${id}`,
    });
    return data;
  } catch (e: unknown) {
    // microCMSが404を返した場合はnullで返す
    if (e instanceof Error && e.message.includes("404")) {
      return null;
    }
    throw e; // 404以外のエラーは再スロー
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // URLからidパラメータを取得
  const post = await getBlogPost(id);
  if (!post) {
    notFound();
    return;
  }
  const postTitle = post.title;


  // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
  const formattedDate = dayjs(post.publishedAt).format("YYYY.M.D");

  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ",
    },
    {
      href: "/blog/",
      text: "日々のこと",
    },
    {
      href: `/blog/${post.id}/`,
      text: postTitle,
    },
  ];

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <TwoColumn>
          <div className={styles.pagePost}>
            <Image
              className={styles.thumbnail}
              src={post.thumbnail.url}
              alt=""
              width={post.thumbnail.width}
              height={post.thumbnail.height}
            />
            <div className={styles.meta}>
              <Link className={styles.category} href={`/blog/category/${post.category[0].id}`}>
                {post.category && post.category[0].name}
              </Link>
              <p className={styles.date}>{formattedDate}</p>
            </div>
            <h2 className={styles.title}>{post.title}</h2>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.contents }}
            ></div>
          </div>
        </TwoColumn>
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </div>
  );
}
