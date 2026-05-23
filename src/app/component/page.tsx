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

import Form from "@/components/layout/Form";

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
        <section>
          <Form />
        </section>
      </main>
    </>
  );
}
