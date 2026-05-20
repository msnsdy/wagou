import styles from "./Media.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import MediaItem from "@/components/ui/MediaItem";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export default function Media() {
  const medias = [
    {
      date: "2024/10/10",
      title: "雑誌〇〇に掲載されました。",
    },
  ];

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
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
              <li className={styles.item}>
                <MediaItem
                  date="2025/10/10"
                  title="雑誌〇〇に掲載されました。"
                />
              </li>
            </ul>
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
              <Link className={`${styles.arrow} ${styles.next}`} href="/blog/">
                <Image
                  src="/common/page-arrow.svg"
                  alt=""
                  width="9"
                  height="13"
                  className={styles.arrowImage}
                />
              </Link>
            </div>
          </div>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}
