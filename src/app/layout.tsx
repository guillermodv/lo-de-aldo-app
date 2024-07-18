"use client";

import { CartContext } from "@/context";
import { Inter } from "next/font/google";
import { useState } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      </body>
    </html>
  );
}
