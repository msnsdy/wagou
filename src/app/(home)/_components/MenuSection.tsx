"use client";
import styles from "./MenuSection.module.css";

import Image from "next/image";
import Heading from "@/components/ui/Heading";
import MenuCard from "./MenuCard";
import MenuModal from "./MenuModal";

export default function MenuSection() {
  const menus = [
    {
      src: "/top/menu-image01.webp",
      title: "さえみどり",
      text: "天然玉露ともいわれるほど、旨みのある煎茶です。\n一煎一煎と淹れるびに、鮮やかになっていき、\nお茶の色味とともに味わい深くなっていきます。",
      commandfor: "menu01",
    },
    {
      src: "/top/menu-image02.webp",
      title: "おおいわせ",
      text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      commandfor: "menu02",
    },
    {
      src: "/top/menu-image03.webp",
      title: "しゅんめい",
      text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      commandfor: "menu03",
    },
    {
      src: "/top/menu-image04.webp",
      title: "玉露やぶきた",
      text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      commandfor: "menu04",
    },
    {
      src: "/top/menu-image05.webp",
      title: "まこも茶",
      text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      commandfor: "menu05",
    },
    {
      src: "/top/menu-image06.webp",
      title: "和紅茶",
      text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      commandfor: "menu06",
    },
    {
      src: "/top/menu-image07.webp",
      title: "米粉のどら焼き",
      text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      commandfor: "menu07",
    },
    {
      src: "/top/menu-image08.webp",
      title: "和合のあぶり餅",
      text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      commandfor: "menu08",
    },
    {
      src: "/top/menu-image09.webp",
      title: "磯部餅",
      text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
      commandfor: "menu09",
    },
  ];

  return (
    <section className={styles.topMenu} id="menu">
      <Heading text="おしながき" />
      <p className={styles.lead}>急須で三煎目までお楽しみいただけます。</p>
      <div className={styles.container}>
        {menus.map((item) => {
          return (
            <div className={styles.card} key={item.commandfor}>
              <MenuCard
                src={item.src}
                title={item.title}
                commandfor={item.commandfor}
              />
            </div>
          );
        })}
        <div className={styles.illustWrap}>
          <Image
            src="/top/menu-illust.webp"
            alt=""
            className={styles.illust}
            width="112"
            height="120"
          />
        </div>
      </div>
      {/* <!-- モーダル --> */}
      {menus.map((item) => {
        return (
          <dialog
            className={styles.modal}
            id={item.commandfor}
            closedby="any"
            aria-labelledby={`${item.commandfor}-heading"`}
            key={item.commandfor}
          >
            <MenuModal
              src={item.src}
              title={item.title}
              text={item.text}
              commandfor={item.commandfor}
            />
          </dialog>
        );
      })}
    </section>
  );
}
