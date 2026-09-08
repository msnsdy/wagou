import styles from "./Service.module.css";
import PageFirstView from "@/components/layout/PageFirstView";
import OneColumn from "@/components/layout/OneColumn";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { defaultOpenGraph, siteName } from "@/app/lib/metadata";

import { client } from "@/app/lib/microcms";

export const metadata = {
  title: "和合について",
  description: "和合についてページです。",
  openGraph: {
    ...defaultOpenGraph,
    title: `和合について | ${siteName}`,
    description: "和合についてページです。",
    url: "/service/",
  },
};

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