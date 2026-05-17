import styles from "./ButtonOutline.module.css";
import Link from "next/link";

type ButtonOutlineProps = {
  href: string;
  text: string;
  blank: boolean;
};

export default function ButtonOutline({ href, text, blank = true }: ButtonOutlineProps) {
  return (
    <Link href={href} className={styles.buttonOutline} target={blank && "_blank"}>
      {text}
    </Link>
  );
}
