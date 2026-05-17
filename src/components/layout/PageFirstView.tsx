import styles from "./PageFirstView.module.css";
import Heading, { HeadingProps } from "@/components/ui/Heading";

export default function PageFirstView({ text }:HeadingProps) {
  return (
    <div className={styles.pageFv}>
      <Heading text={text} />
    </div>
  );
}