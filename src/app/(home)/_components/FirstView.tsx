"use client";

import Image from "next/image";
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
          />
        </h1>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="/service" className={styles.menuLink}>
              和合について
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#menu" className={styles.menuLink}>
              おしながき
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/meditation" className={styles.menuLink}>
              茶・メディテーション
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/blog" className={styles.menuLink}>
              日々のこと
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="/media" className={styles.menuLink}>
              メディア情報
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#access" className={styles.menuLink}>
              アクセス
            </a>
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
