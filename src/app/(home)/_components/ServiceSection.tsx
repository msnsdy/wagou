import styles from "./ServiceSection.module.css";

import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import ServiceCard from "./ServiceCard";
import MeditationCard from "./MeditationCard";

export default function ServiceSection() {
  return (
    <section className={styles.topService} id="service">
      <div className={styles.container}>
        <Heading text="和合でできること" />
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <ServiceCard
              src="/top/servise-image01.webp"
              title="お茶を楽しむ"
              href="/service"
            />
          </div>
          <div className={styles.card}>
            <div className="c-service-card">
              <ServiceCard
                src="/top/servise-image02.webp"
                title="商品を買う"
                href="/service"
              />
            </div>
          </div>
        </div>
        <section className={styles.meditaion}>
          <h3 className={styles.meditaionHeading}>
            茶・メディテーション
          </h3>
          <p className={styles.meditaionLead}>
            茶房で心も身体も癒す時間を
          </p>
          <div className={styles.meditaionWrapper}>
            <div className={styles.meditaionCard}>
              <MeditationCard
                src="/top/meditation-image01.webp"
                title="セラピー"
              />
            </div>
            <div className={styles.meditaionCard}>
              <MeditationCard
                src="/top/meditation-image02.webp"
                title="お茶を感じる会"
              />
            </div>
            <div className={styles.meditaionCard}>
              <MeditationCard
                src="/top/meditation-image03.webp"
                title="ヨガ"
              />
            </div>
          </div>
          <div className={styles.meditationButton}>
            <Button href="/meditaion" text="詳しくはこちら" />
          </div>
          <div className={styles.meditaionIllustWrap}>
            <Image
              src="/top/service-illust.webp"
              alt=""
              width="190"
              height="140"
              className={styles.meditaionIllust}
            />
          </div>
        </section>
      </div>
    </section>
  );
}
