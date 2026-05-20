import styles from "./Label.module.css";

type LabelProps = {
  text: string;
  example?: string;
  isRequired?: boolean;
  id?: string;
};

export default function Label({text, example="", isRequired=true, id=""}:LabelProps) {
  return (
    <div className={styles.label}>
      <div className={styles.wrap}>
        <label htmlFor={id} className={styles.text}>
          {text}
        </label>
        {isRequired && <span className={styles.tag}>必須</span>}
      </div>
      {example !== "" && <span className={styles.example}>{example}</span>}
    </div>
  );
}