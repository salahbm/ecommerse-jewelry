/** @format */

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import SideNavbar from "@/components/admin/SideNavbar";

const inter = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Admin MrJoni&Co",
  description: "Manage your admin dashboard",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full bg-white text-neutral-800 flex ",
        inter.className,
        {
          "debug-screens": process.env.NODE_ENV === "development",
        }
      )}
    >
      <SideNavbar />
      {/* main page */}
      <main className="p-8 w-full">{children}</main>
    </div>
  );
};

export default Layout;
