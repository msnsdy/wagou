import styles from "./Reservation.module.css";

import PageFirstView from "@/components/layout/PageFirstView";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Form from "@/components/layout/Form";
import Image from "next/image";

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
