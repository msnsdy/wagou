import styles from "./Form.module.css";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import DatePickerInput from "../ui/DatePickerInput";
import Select from "../ui/Select";
import Submit from "../ui/Submit";

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.body}>
        <div className={styles.field}>
          <Label id="your-name" text="お名前" />
          <Input
            id="your-name"
            type="text"
            name="your-name"
            placeholder="山田太郎"
          />
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label id="your-email" text="メールアドレス" />
          <Input
            id="your-email"
            type="email"
            name="your-email"
            placeholder="example@example.com"
            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          />
          <p className={styles.error}>メールアドレスの形式と異なります。</p>
        </div>
        <div className={styles.field}>
          <Label id="your-tel" text="電話番号" />
          <Input
            id="your-tel"
            type="tel"
            name="your-tel"
            placeholder="000-0000-0000"
            pattern="\d{2,4}-\d{2,4}-\d{3,4}"
          />
          <p className={styles.error}>電話番号の形式と異なります。</p>
        </div>
        <div className={styles.field}>
          <Label
            id="your-first-date"
            text="予約第一希望日"
            example="例) 2026年10月1日"
          />
          <DatePickerInput id="your-first-date" name="your-first-date" />
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label
            id="your-second-date"
            text="予約第二希望日"
            example="例) 2026年10月1日"
            isRequired={false}
          />
          <DatePickerInput
            id="your-second-date"
            name="your-second-date"
            required={false}
          />
        </div>
        <div className={styles.field}>
          <Label id="your-seat" text="お席の希望" />
          <Select
            name="your-seat"
            items={[
              { value: "", text: "選択してください" },
              { value: "table", text: "テーブル" },
              { value: "counter", text: "カウンター" },
            ]}
          />
          <p className={styles.error}>必須の入力項目です。</p>
        </div>
        <div className={styles.field}>
          <Label id="your-other" text="備考欄" isRequired={false} />
          <Textarea id="your-other" name="備考欄" required={false} />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.submit}>
          <Submit text="送信する" />
          <p className={styles.submitError}>入力内容に誤りがあります。</p>
        </div>
      </div>
    </form>
  );
}
