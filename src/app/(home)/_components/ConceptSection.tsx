import styles from "./ConceptSection.module.css";
import Image from "next/image";

export default function ConceptSection() {
  return (
    <section className={styles.topConcept} id="concept">
      <div className={styles.imageWrap1}>
        <Image
          src="/top/concept-image01.webp"
          alt=""
          width="556"
          height="610"
          className={styles.image}
        />
      </div>
      <div className={styles.imageWrap2}>
        <Image
          src="/top/concept-image02.webp"
          alt=""
          width="556"
          height="610"
          className={styles.image}
        />
      </div>
      <div className={styles.imageWrap3}>
        <Image
          src="/top/concept-image03.webp"
          alt=""
          width="556"
          height="610"
          className={styles.image}
        />
      </div>
      <div className={styles.imageWrap4}>
        <Image
          src="/top/concept-image04.webp"
          alt=""
          width="556"
          height="610"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>和み合う、茶舗和合</h2>
        <p className={styles.text}>
          こもださんの農園では、
          <br />
          真菰、米、お茶の栽培を行っています。
          <br />
          知多半島の海風と太陽のめぐみを有効活用し、
          <br />
          人と自然と植物、
          <br className={styles.isSp} />
          すべてが調和するように農業をしています。
          <br />
          そして、仲間たちが惜しみなく
          <br className={styles.isSp} />
          心と手をかけてくれるからこそ、
          <br />
          植物の本来もつ力を信頼し、
          <br className={styles.isSp} />
          それを活かすことができています。
        </p>
        <p className={styles.text}>
          互いに無理しすぎることなく、助け合う心、
          <br className={styles.isSp} />
          分け合う心を大切に、
          <br />
          ちきゅうであそぶように農園をしています。
          <br />
          こうしてうまれた一杯のお茶を、
          <br />
          おもてなしの心とともにお届けしたい。
          <br />
          茶舗 和合は、日常から離れ、ほっとゆっくりひとやすみ。
        </p>
        <p className={styles.text}>
          からだとこころを清め、調える、お茶所です。
          <br />
          あなたの大切な今日という日の、
          <br />
          なごみのひとときと
          <br />
          なりますように。
        </p>
        <div className={styles.illustWrap}>
          <Image
            src="/top/concept-illust.webp"
            alt=""
            width="190"
            height="140"
            className={styles.illust}
          />
        </div>
      </div>
    </section>
  );
}
