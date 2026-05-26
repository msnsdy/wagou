import styles from "./Thanks.module.css";

import PageFirstView from "@/components/layout/PageFirstView";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Image from "next/image";

export default function Thanks() {
  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ",
    },
    {
      href: "/reservation/",
      text: "ご予約フォーム",
    },
    {
      href: "/reservation/thanks/",
      text: "ご予約完了ページ",
    },
  ];

  return (
    <>
      <PageFirstView text="ご予約フォーム" />

      <div className={styles.thanks}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <p className={styles.lead}>ご予約申請完了いたしました。</p>
            <p className={styles.text}>
              ご入力いただいたメールアドレスに自動返信にて
              <br />
              お問い合わせ内容をお送りしております。
            </p>
            <p className={styles.text}>
              3日以内にご返信させて頂きますので、
              <br />
              今しばらくお待ちくださいませ。
            </p>
            <Image
              src="/common/top-illust.webp"
              alt=""
              width="170"
              height="112"
              loading="lazy"
              decoding="async"
              className={styles.image}
            />
          </div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>
    </>
  );
}
