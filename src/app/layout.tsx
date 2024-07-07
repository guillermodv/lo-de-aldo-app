import type { Metadata } from "next";

import { Label } from "@/constants/label";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lo de Aldo app",
  description: "Lo de aldo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>
          <div className="flex flex-row font-sans hover:font-bold justify-evenly border-2 bg-orange-400 bg-grey-100 p-1 w-full text-black font-extrabold">
            {Label.AUTHOR}
          </div>
        </footer>
      </body>
    </html>
  );
}
