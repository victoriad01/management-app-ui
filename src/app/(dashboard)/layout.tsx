import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex h-screen">
        <aside className="w-2/12 md:w-1/12 lg:w-1/6 xl:w-2/12">
          <Link
            href="/"
            className="flex gap-2 justify-center lg:justify-start items-center p-4 "
          >
            <Image src="/logo.png" alt="logo" height={32} width={32} />
            <span className="hidden lg:block font-bold">VI-Schools</span>
          </Link>
          <Menu />
        </aside>
        <div className=" overflow-scroll bg-[#F7F8FA]  w-10/12 md:w-11/12 lg:w-5/6 xl:w-10/12 flex flex-col">
          <NavBar />
          <div className="py-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
