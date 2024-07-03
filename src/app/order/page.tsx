"use client";
import OrderForm from "@/components/orderForm";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <OrderForm />
    </Suspense>
  );
}
