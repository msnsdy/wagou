import styles from "./Button.module.css";
import Link from "next/link";

type ButtonProps = {
  href: string;
  text: string;
};

export default function Button({ href, text }:ButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      {text}
    </Link>
  );
}