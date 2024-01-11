import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/lib/auth/SessionProvider";
import { getServerSession } from "next-auth";

const spaceGrotesk = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Welcome: Joni & Co",
  description: "Precious jewelries to make stunning memories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <AuthProvider session={session}>
          <main className="max-w-[1440px] mx-auto">
            <Navbar />
            {children}
            <Footer />
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
