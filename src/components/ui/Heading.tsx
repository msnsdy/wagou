import styles from "./Heading.module.css";
import Image from "next/image";

type HeadingProps = {
  text: string;
};

export default function Heading({ text }: HeadingProps) {
  return (
    <hgroup className={styles.heading}>
      <span className={styles.heading__leaf}>
        <Image src="/common/head-leaf.webp" alt="" width="100" height="38" />
      </span>
      <h2 className={styles.heading__main}>{text}</h2>
    </hgroup>
  );
}
