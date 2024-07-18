"use client";
import CartSummary from "@/components/cartSummary";
import { CartContext } from "@/context";
import { useContext } from "react";

export default function Page() {
  const { cart, setCart } = useContext(CartContext);
  return <CartSummary cartItems={cart} setCart={setCart} />;
}
