import SideBarMenu from "@/components/SideBarMenu/SideBarMenu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoadingTopBar from "@/components/LoadingTopBar/LoadingTopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeeoro | The Finance App",
  description: "The All in  one Fiannce tracker and planner app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <LoadingTopBar />

          <div className="flex flex-row bg-white">
            <SideBarMenu />
            <div className="flex-1 bg-slate-100">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
