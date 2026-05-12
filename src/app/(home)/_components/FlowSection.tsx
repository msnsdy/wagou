import Heading from "@/components/ui/Heading";
import Image from "next/image";
import FlowCard from "./FlowCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./FlowSection.module.css";

export default function FlowSection() {
  const slides = [
    {
      src: "/top/flow-image01.webp",
      number: "01",
      title: "かぶせ",
      text: "八十八夜前後、新芽が芽吹く頃にお茶の木に黒い幕をかけ10日ほど待ちます。一手間をかけて日光を遮ることで、新芽を柔らかく保ち、緑濃く、旨み成分豊富なお茶になります。このような栽培方法を被覆栽培といい、玉露やかぶせ茶など、旨みの強いお茶を作るために用いられます。",
    },
    {
      src: "/top/flow-image02.webp",
      number: "02",
      title: "刈り取り",
      text: "無農薬栽培のため、茶畑の除草作業を行った後、茶葉の刈り取りを行います。新芽が最も柔らかく、栄養をたっぷりと蓄えたタイミングを見極め、一枚一枚の葉の状態を確かめながら丁寧に収穫します。",
    },
    {
      src: "/top/flow-image03.webp",
      number: "03",
      title: "茶工場へ",
      text: "摘み取った茶葉は、発酵しないよう、すぐに茶工場へ。蒸し→揉み→乾燥とすべての加工工程に目を通し、より良いお茶となるよう調整を行いながらお茶を仕上げていきます。年々の気候変動や茶葉の生育状況に合わせて、加工に工夫を凝らし、茶葉の持つ力を存分に引き出すのが茶師の技術です。",
    },
    {
      src: "/top/flow-image04.webp",
      number: "04",
      title: "乾燥",
      text: "煎茶の製造において乾燥は、茶葉の品質を安定させ香りを引き出す大切な工程です。揉みながら形を整えた茶葉を温風でゆっくりと乾かし、含まれる水分をおよそ5％ほどまで減らします。乾燥によって保存性が高まり、茶葉特有の爽やかな香りが際立ちます。",
    },
  ];

  return (
    <section className={styles.topFlow} id="flow">
      <Heading text="煎茶ができるまで" />
      <p className={styles.lead}>
        農薬不使用有機栽培による、
        <br className={styles.isSp} />
        人体にも環境にも優しいお茶づくりをしています。
        <br />
        茶畑を営むことで山の緑や豊かな水源を守ることにも
        <br className={styles.isSp} />
        繋がると考えています。
      </p>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          speed={1000}
          centeredSlides={true}
          spaceBetween={12}
          slidesPerView={"auto"}
          navigation={{
            nextEl: "#navigationNext",
            prevEl: "#navigationPrev",
          }}
          pagination={{
            el: "#pagination",
            clickable: true,
          }}
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <FlowCard
                  src={slide.src}
                  number={slide.number}
                  title={slide.title}
                  text={slide.text}
                ></FlowCard>
              </SwiperSlide>
            );
          })}
          <div className={styles.controller}>
            <div className={styles.slidePaginationWrap}>
              <div id="pagination" />
            </div>
            <div className={styles.controllerWrap}>
              <div id="navigationPrev">
                <div className="swiper-button-prev">
                  <Image
                    src="/top/slide-btn.webp"
                    alt=""
                    width="36"
                    height="36"
                    className={styles.slideButton}
                  />
                </div>
              </div>
              <div id="navigationNext">
                <div className="swiper-button-next">
                  <Image
                    src="/top/slide-btn.webp"
                    alt=""
                    width="36"
                    height="36"
                    className={styles.slideButton}
                  />
                </div>
              </div>
            </div>
          </div>
        </Swiper>

        <div className={styles.illustWrap}>
          <Image
            src="/top/flow-illust.webp"
            alt=""
            className={styles.illust}
            width="230"
            height="170"
          />
        </div>
      </div>
    </section>
  );
}
