"use client";
import styles from "./page.module.css";

import Script from "next/script";
import FirstView from "./_components/FirstView";
import ConceptSection from "./_components/ConceptSection";
import ServiceSection from "./_components/ServiceSection";
import MenuSection from "./_components/MenuSection";
import FlowCard from "./_components/FlowCard";
import FlowSection from "./_components/FlowSection";

export default function Home() {
  return (
    <>
      <FirstView />
      <ConceptSection />
      <ServiceSection />
      <MenuSection />
      <FlowSection />
      <Script
        src="https://unpkg.com/invokers-polyfill@latest/invoker.min.js"
        strategy="lazyOnload"
        type="module"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/dialog-closedby-polyfill@latest/index.min.js"
        strategy="lazyOnload"
        type="module"
      />
    </>
  );
}