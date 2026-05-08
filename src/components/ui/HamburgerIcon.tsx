"use client";

import styles from "./HamburgerIcon.module.css";

type HamburgerIconProps = {
  isOpen: boolean;
  isHide: boolean;
  onClick: () => void;
};

export default function HamburgerIcon({ isOpen = false, isHide = false, onClick }: HamburgerIconProps) {
  const handleClick = () => {
    onClick(); // page.tsxから受け取った関数を実行
  };

  return (
    <button
      className={`${styles.hamburger} ${isOpen && styles.isOpen} ${isHide && styles.isHide}`}
      type="button"
      aria-label="メニューを開閉"
      onClick={handleClick}
    >
      <span className={styles.bar1}></span>
      <span className={styles.bar2}></span>
      <span className={styles.bar3}></span>
    </button>
  );
}