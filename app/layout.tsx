import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhotoGrapher",
  description: "Mohamed Zouine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
