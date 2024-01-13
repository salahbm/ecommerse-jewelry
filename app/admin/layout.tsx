// /** @format */


import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '../globals.css'
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/admin/SideNavbar";


const inter = Poppins({  subsets: ["latin"],
weight: ["300", "400", "700"], });

export const metadata: Metadata = {
  title: "Admin MrJoni&Co",
  description: "Manage your admin dashboard"
};

// export default function RootLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body
//         className={cn(
//           "min-h-screen w-full bg-white text-black flex ",
//           inter.className,
//           // {
//           //   "debug-screens": process.env.NODE_ENV === "development"
//           // }
//         )}
//       >
//         {/* sidebar */}
//         {/* <p className="border">Sidebar</p> */}
//         <SideNavbar />
//         {/* main page */}
//         <div className="p-8 w-full">{children}</div>
//       </body>
//     </html>
//   );
// }
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body
    className={cn(
      "min-h-screen w-full bg-white text-neutral-800 flex ",
      inter.className,
      // {
      //   "debug-screens": process.env.NODE_ENV === "development"
      // }
    )}
  >
    {/* sidebar */}
    {/* <p className="border">Sidebar</p> */}
    <SideNavbar />
    {/* main page */}
    <div className="p-8 w-full">{children}</div>
  </body>
  );
};

export default Layout;
