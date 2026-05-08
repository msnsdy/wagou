"use client";

import styles from "./Header.module.css";
import HamburgerIcon from "@/components/ui/HamburgerIcon";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHide, setIsHide] = useState(() => pathname === "/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (pathname !== "/") return; // トップページ以外は何もしない
    const handleScroll = () => {
      setIsHide(window.scrollY <= 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      id="js-header"
      className={`${styles.header} ${isOpen && styles.isOpen}`}
    >
      <div className={styles.container}>
        {pathname !== "/" && (
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logo}
              src="./common/logo-black.svg"
              alt="Wagou"
              width="100"
              height="100"
              loading="eager"
            />
          </Link>
        )}
        <div className={styles.hamburger}>
          <HamburgerIcon isOpen={isOpen} isHide={isHide} onClick={toggleMenu} />
        </div>
        <div className={styles.content}>
          <Link href="/" className={styles.logoLink}>
            <Image
              className={styles.logoContent}
              src="./common/logo-black.svg"
              alt="Wagou"
              width="100"
              height="100"
            />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/service" className={styles.link}>
                  和合について
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/#menu" className={styles.link}>
                  おしながき
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/meditation" className={styles.link}>
                  茶・メディテーション
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/blog/" className={styles.link}>
                  日々のこと
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/media/" className={styles.link}>
                  メディア情報
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/#access" className={styles.link}>
                  アクセス
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
