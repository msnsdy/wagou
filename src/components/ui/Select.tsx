import styles from "./Select.module.css";

type SelectProps = {
  items: {
    value: string;
    text: string;
  }[];
  // 共通設定
  name: string;
  required?: boolean;
}

export default function Select({ name, items, ...restOfProps}:SelectProps) {
  return (
    <div className={styles.selectWrap}>
      <select name={name} className={styles.select}>
        {items.map((item, index) => {
          return (
            <option value={item.value} key={index}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}