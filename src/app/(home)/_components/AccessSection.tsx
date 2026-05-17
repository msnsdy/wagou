import styles from "./AccessSection.module.css";

import ButtonOutline from "@/components/ui/ButtonOutline";

export default function AccessSection() {
  return (
    <div className={styles.topAccess} id="access">
      <div className={styles.container}>
        <div className={styles.mapWrap}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.831058151688!2d136.8392667!3d34.885588399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60048768da9f32d9%3A0x8f3f6276902f957f!2z6Iy26IiXIOWSjOWQiA!5e0!3m2!1sja!2sjp!4v1777612333228!5m2!1sja!2sjp"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>茶舗 和合</p>
          <p className={styles.address}>
            愛知県常滑市栄町6丁目166
            <br />
            名鉄常滑駅から徒歩15分
          </p>
          <p className={styles.tel}>050-0000-0000</p>
          <div className={styles.buttonOutline}>
            <ButtonOutline
              href="https://maps.app.goo.gl/sFwV36UioEouegU38"
              text="Google mapへ"
              blank={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
