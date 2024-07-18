"use client";
import CartSummary from "@/components/cartSummary";
import { useContext } from "react";
import { CartContext } from "../layout";

export default function Page() {
  const { cart } = useContext(CartContext);
  return <CartSummary cartItems={cart} />;
}
