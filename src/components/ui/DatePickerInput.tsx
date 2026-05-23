"use client";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePickerInput.module.css";

import DatePicker, { registerLocale } from "react-datepicker";
import { ja } from "date-fns/locale";
import { useState } from "react";

registerLocale("ja", ja);

type DatePickerInputProps = {
  name: string;
  id?: string;
  required?: boolean;
};

export default function DatePickerInput({
  id = "",
  name,
  ...restOfProps
}: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      id={id}
      name={name}
      selected={selectedDate}
      onChange={handleChange}
      minDate={new Date()} // 今日以前は選択不可
      dateFormat="yyyy年MM月dd日" // jQueryのdateFormatと同じ表示
      locale="ja" // 日本語カレンダー
      placeholderText="年/月/日"
      className={styles.input}
      {...restOfProps}
    />
  );
}
