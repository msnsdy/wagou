import styles from "./Reservation.module.css";

import PageFirstView from "@/components/layout/PageFirstView";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Form from "@/components/layout/Form";
import Image from "next/image";
import { defaultOpenGraph, siteName } from "@/app/lib/metadata";

export const metadata = {
  title: "予約ページ",
  description: "予約ページです。",
  openGraph: {
    ...defaultOpenGraph,
    title: `予約ページ | ${siteName}`,
    description: "予約ページです。",
    url: "/reservation/",
  },
};

export default function Reservation() {
  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ",
    },
    {
      href: "/reservation/",
      text: "ご予約フォーム",
    },
  ];

  return (
    <>
      <PageFirstView text="ご予約フォーム" />

      <article className={styles.reservation}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <Form />
            <div className={styles.bgWrap}>
              <Image
                src="/common/logo-green.svg"
                alt=""
                width="474"
                height="474"
                className={styles.bgImage}
              />
            </div>
          </div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}
