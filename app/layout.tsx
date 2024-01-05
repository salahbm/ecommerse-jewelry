import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "JoniAndCo",
  description: "Precious jewelries to make memories unforgetable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
