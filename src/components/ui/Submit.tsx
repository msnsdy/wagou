import styles from "./Submit.module.css";

type SubmitProps = {
  text: string;
};

export default function Submit({ text }: SubmitProps) {
  return (
    <button type="submit" className={styles.submit}>
      {text}
    </button>
  );
}