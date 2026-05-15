import styles from "./MediaSection.module.css";

import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Image from "next/image";
import MediaItem from "@/components/ui/MediaItem";
import { formatDate } from "@/utils/date";

export default function MediaSection() {
  return (
    <section className={styles.topMedia}>
      <div className={styles.bgWrap}>
        <Image
          src="/common/logo-green.svg"
          alt=""
          width="614"
          height="614"
          className={styles.bg}
        />
      </div>
      <div className={styles.container}>
        <div className="p-top-medita__heading">
          <Heading text="メディア情報" />
        </div>
        <div className={styles.content}>
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
          </ul>
          <div className={styles.button}>
            <Button href="/media" text="全てを見る" />
          </div>
        </div>
        <div className={styles.illustWrap}>
          <Image
            src="/top/media-illust.webp"
            alt=""
            width="130"
            height="136"
            className={styles.illust}
          />
        </div>
      </div>
    </section>
  );
}
