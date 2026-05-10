import styles from "./page.module.css";

import FirstView from "./_components/FirstView";
import ConceptSection from "./_components/ConceptSection";
import ServiceSection from "./_components/ServiceSection";

export default function Home() {
  return (
    <>
      <FirstView />
      <ConceptSection />
      <ServiceSection />
    </>
  );
}