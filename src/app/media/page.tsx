import styles from "./Media.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import MediaItem from "@/components/ui/MediaItem";
import Breadcrumb from "@/components/layout/Breadcrumb";

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
          <ul className={styles.list}>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
            <li className={styles.item}>
              <MediaItem date="2025/10/10" title="雑誌〇〇に掲載されました。" />
            </li>
          </ul>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}
