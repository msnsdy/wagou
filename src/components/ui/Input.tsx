import styles from "./Input.module.css";

type InputProps = {
  id?: string;
  type: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  min?: string;
  max?: string;
};

export default function Input({
  id = "",
  type,
  name,
  defaultValue = "",
  placeholder = "",
  ...restOfProps
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      className={styles.input}
      placeholder={placeholder}
      name={name}
      {...restOfProps}
    ></input>
  );
}
