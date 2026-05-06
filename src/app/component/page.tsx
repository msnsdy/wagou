import Button from "@/components/ui/Button";
import ButtonOutline from "@/components/ui/ButtonOutline";
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
      </main>
    </>
  );
}
