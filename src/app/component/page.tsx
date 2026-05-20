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

import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import DatePickerInput from "@/components/ui/DatePickerInput";
import Select from "@/components/ui/Select";
import Submit from "@/components/ui/Submit";

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
          <Label
            text="お名前"
            id="your-name"
            isRequired={true}
            example="例）2026年5月20日"
          />
          <Input
            id="your-name"
            type="email"
            name="お名前"
            placeholder="例）田中太郎"
            required={true}
          />
          <Label text="備考欄" id="your-other" isRequired={true} />
          <Textarea
            id="your-other"
            name="備考欄"
            placeholder=""
            required={true}
          />
          <Label
            text="予約第一希望"
            id="your-date-first"
            isRequired={false}
            example="例) 2026年10月1日"
          />
          <DatePickerInput id="your-date" name="your-date" />
          <Label
            text="お席の希望"
            id="your-seat"
            isRequired={true}
          />
          <Select id="your-seat" name="your-seat" />
          <Submit text="送信する"/>
        </section>
      </main>
    </>
  );
}
