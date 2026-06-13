import styles from "./Footer.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.info}>
            <Link href="/" className={styles.logoLink}>
              <Image
                className={styles.logo}
                src="/common/logo-black.svg"
                alt="Wagou"
                width="100"
                height="100"
              />
            </Link>
            <p className={styles.company}>茶舗和合</p>
            <p className={styles.address}>愛知県常滑市栄町6丁目166</p>
          </div>
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
            </ul>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link href="/blog" className={styles.link}>
                  日々のこと
                </Link>
              </li>
              <li className={styles.item}>
                <Link href="/media" className={styles.link}>
                  メディア情報
                </Link>
              </li>
              <li className={`${styles.item} ${styles.last}`}>
                <Link href="/#access" className={styles.link}>
                  アクセス
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p className={styles.copyright}>
        このサイトは「茶舗和合」様のご協力のもと作成した
        <br className={styles.isSp} />
        コーディング用の練習課題です。
        <br />
        copyright
      </p>
    </footer>
  );
}
