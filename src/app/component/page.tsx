import Button from "@/components/ui/Button";
import ButtonOutline from "@/components/ui/ButtonOutline";
import Heading from "@/components/ui/Heading";

import styles from "./component.module.css";

export default function Component() {
  return (
    <>
      <main className={styles.main}>
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
      </main>
    </>
  );
}
