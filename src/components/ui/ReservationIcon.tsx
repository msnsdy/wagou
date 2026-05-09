"use client";

import styles from "./ReservationIcon.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function ReservationIcon() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShow(window.scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.reservation} ${isShow && styles.isShow}`}
      id="js-reservation"
    >
      <Link href="/reservation" className={styles.reservationLink}>
        <Image
          src="/common/reservation.webp"
          alt="予約する"
          className="c-reservationImage"
          width="111"
          height="157"
        />
      </Link>
    </div>
  );
}
