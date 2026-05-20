"use client";

import Button from "@/components/ui/Button";
import ButtonOutline from "@/components/ui/ButtonOutline";
import Heading from "@/components/ui/Heading";
import HamburgerIcon from "@/components/ui/HamburgerIcon";
import Image from "next/image";
import { useState } from "react";

import styles from "./component.module.css";

import PageFirstView from "@/components/layout/PageFirstView";
import TwoColumn from "@/components/layout/TwoColumn";
import OneColumn from "@/components/layout/OneColumn";

export default function Component() {
  // [現在の状態, 状態を更新する関数名] = useState(初期値);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // isOpenの状態を反転させる
  };

  return (
    <>
      <main className={styles.main}>
        <TwoColumn>
          <section className={styles.section}>
            <h2>ボタン</h2>
            <Button href="#" text="詳しくはこちら"></Button>
            <hr />
            <ButtonOutline href="#" text="詳しくはこちら"></ButtonOutline>
          </section>
          <section className={styles.section}>
            <h2>見出し</h2>
            <Heading text="見出し"></Heading>
          </section>
          <HamburgerIcon isOpen={isOpen} isHide={true} onClick={toggleMenu} />
          <PageFirstView text="日々のこと" />
        </TwoColumn>
        <hr />
        <OneColumn>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
          </p>
          <h2>見出し2</h2>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
          </p>
          <figure>
            <Image src="/blog/post-image01.jpg" alt="" width="700" height="377" />
          </figure>
          <h3>見出し3</h3>
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ
          </p>
        </OneColumn>
      </main>
    </>
  );
}
