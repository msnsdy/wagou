"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import styles from "./FirstView.module.css";

export default function FirstView() {
  const slides = [
    "/top/slider01.webp",
    "/top/slider02.webp",
    "/top/slider03.webp",
    "/top/slider04.webp",
    "/top/slider05.webp",
  ];

  return (
    <div className={styles.topFv}>
      <div className={styles.menu}>
        <h1 className={styles.menuLogoWrap}>
          <Image
            src="/common/logo-black.svg"
            alt="茶舗和合"
            className={styles.menuLogo}
            width="130"
            height="130"
            priority
          />
        </h1>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/service/" className={styles.menuLink}>
              和合について
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#menu" className={styles.menuLink}>
              おしながき
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/meditation/" className={styles.menuLink}>
              茶・メディテーション
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/blog/" className={styles.menuLink}>
              日々のこと
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/media/" className={styles.menuLink}>
              メディア情報
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="#access" className={styles.menuLink}>
              アクセス
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          loop={true}
          effect={"fade"}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: "#pagination",
            clickable: true,
          }}
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={slide}
                  alt=""
                  width="990"
                  height="737"
                  priority={index === 0}
                  className={styles.slideImage}
                />
              </SwiperSlide>
            );
          })}
          <div id="pagination" />
        </Swiper>
        <div className={styles.copy}>
          <div className={styles.copyWrap}>
            <p className={styles.copy1}>ひと休み</p>
            <p className={styles.copy2}>和み合う</p>
            <p className={styles.copy3}>茶舗和合</p>
          </div>
          <div className={styles.copyIllustWrap}>
            <Image
              src="/top/top-illust.webp"
              alt=""
              width="200"
              height="130"
              className={styles.copyIllust}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
