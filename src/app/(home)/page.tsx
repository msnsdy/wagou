"use client";
import styles from "./page.module.css";

import Script from "next/script";
import FirstView from "./_components/FirstView";
import ConceptSection from "./_components/ConceptSection";
import ServiceSection from "./_components/ServiceSection";
import MenuSection from "./_components/MenuSection";
import FlowSection from "./_components/FlowSection";
import BlogSection from "./_components/BlogSection";
import MediaSection from "./_components/MediaSection";
import AccessSection from "./_components/AccessSection";

export default function Home() {
  return (
    <>
      <FirstView />
      <ConceptSection />
      <ServiceSection />
      <MenuSection />
      <FlowSection />
      <BlogSection />
      <MediaSection />
      <AccessSection />
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