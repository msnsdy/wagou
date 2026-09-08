import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wagou.msnsdy0919.workers.dev";


const notoSerifJp = Noto_Serif_JP({
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Wagou",
    default: "Wagou",
  },
  description: "ひと休み和み合う茶舗和合",
  openGraph: {
    title: "Wagou",
    description: "Wagou",
    images: ["/common/ogp.jpg"],
    siteName: "Wagou",
    url: "/",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${notoSerifJp.variable} `}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
