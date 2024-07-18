"use client";

import { Label } from "@/constants/label";
import { Inter } from "next/font/google";
import { createContext, useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const CartContext = createContext({
  cart: [],
  setCart: (p0: any) => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState([]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContext.Provider value={{ cart, setCart }}>
          {children}
        </CartContext.Provider>
        <footer>
          <div className="flex flex-row font-sans hover:font-bold justify-evenly border-2 bg-orange-400 bg-grey-100 p-1 w-full text-black font-extrabold">
            {Label.AUTHOR}
          </div>
        </footer>
      </body>
    </html>
  );
}
