import styles from "./Select.module.css";

type SelectProps = {
  id?: string;
  name: string;
}

export default function Select({id="", name}:SelectProps) {
  return (
    <div className={styles.selectWrap}>
      <select name={name} id={id} className={styles.select}>
        <option value="">選択してください</option>
        <option value="counter">カウンター</option>
        <option value="table">テーブル</option>
      </select>
    </div>
  );
}