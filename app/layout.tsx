import type { Metadata } from "next";
import "./globals.css";
import { BIZ_UDGothic } from "next/font/google";

const bizUdGothic = BIZ_UDGothic({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "アリス・ギア・アイギス スカウト率チェッカー",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${bizUdGothic.className} antialiased text-black`}>
        {children}
      </body>
    </html>
  );
}
