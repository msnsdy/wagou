import styles from "./Service.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Image from "next/image";

import { client } from "@/app/lib/microcms";

type Props = {
  contents: string;
};

async function getServicePost(): Promise<Props> {
  const data = await client.get({
    endpoint: 'service',
  });

  return data;
}

export default async function Service() {
  const data = await getServicePost();
  const breadcrumbItems = [
    {
      href: "/",
      text: "トップページ"
    },
    {
      href: "/service/",
      text: "和合について"
    }
  ];

  return (
    <>
      <PageFirstView text="和合について" />

      <article className={styles.service}>
      <div className={styles.container}>
        <OneColumn>
          <div dangerouslySetInnerHTML={{__html: data.contents}}></div>
        </OneColumn>
        <Breadcrumb items={breadcrumbItems} />
      </div>
    </article>
    </>
  );
}