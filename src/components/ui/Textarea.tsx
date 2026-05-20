import styles from "./Textarea.module.css";

type TextareaProps = {
  id?: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
};

export default function Textarea({
  id = "",
  name,
  defaultValue = "",
  placeholder = "",
  ...restOfProps
}: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      className={styles.textarea}
      placeholder={placeholder}
      {...restOfProps}
    ></textarea>
  );
}
