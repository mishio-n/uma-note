import { css } from "@/styled-system/css";
import { Header } from "@/ui/header";
import { Navigation } from "@/ui/navigation";
import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "うまノート",
  description: "競馬に関することを気ままに更新します",
  icons: [
    {
      rel: "icon",
      url: "/icon.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon,png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${notoSansJP.className}`}>
        <Header />
        <main
          className={css({
            // minHeight: "100vh",
            marginX: "auto",
            width: "10/12",
            paddingY: 6,
          })}
        >
          <Navigation />
          {children}
        </main>
        {modal}
      </body>
    </html>
  );
}
