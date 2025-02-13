import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased text-black">{children}</body>
    </html>
  );
}
