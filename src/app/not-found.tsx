import styles from "./NotFound.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { defaultOpenGraph, siteName } from "@/app/lib/metadata";

export const metadata = {
  title: "ページが見つかりませんでした",
  description: "ページが見つかりませんでした。",
  openGraph: {
    ...defaultOpenGraph,
    title: `ページが見つかりませんでした | ${siteName}`,
    description: "ページが見つかりませんでした",
  },
};

export default function NotFound() {
  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ",
    },
    {
      href: "/",
      text: "404",
    },
  ];

  return (
    <>
      <PageFirstView text="404" />

      <div className={styles.notFound}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <p className={styles.lead}>ページが見つかりませんでした</p>
            <p className={styles.text}>
              お探しのページは移動もしくは
              <br />
              削除された可能性があります。
            </p>
            <p className={styles.text}>トップページから再度お探しください。</p>
            <div className={styles.button}>
              <Button href="/" text="トップページへ" />
            </div>
            <div className={styles.imageWrap}>
            <Image
              src="/common/top-illust.webp"
              alt=""
              width="200"
              height="130"
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
            </div>
          </div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
    </>
  );
}
