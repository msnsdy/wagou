import styles from "./Meditation.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";

import { client } from "@/app/lib/microcms";

type Props = {
  contents: string;
};

async function getMeditationPost(): Promise<Props> {
  const data = await client.get({
    endpoint: "meditation",
  });

  return data;
}

export default async function Meditation() {
  const data = await getMeditationPost();
  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ",
    },
    {
      href: "/meditation/",
      text: "茶・メディテーション",
    },
  ];

  return (
    <>
      <PageFirstView text="茶・メディテーション" />

      <article className={styles.meditation}>
        <div className={styles.container}>
          <OneColumn>
            <div dangerouslySetInnerHTML={{ __html: data.contents }}></div>
          </OneColumn>
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </article>
    </>
  );
}
