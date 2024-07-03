"use client";
import { Label } from "@/constants/label";

export const openInNewTab = (url: string): void => {
  window.open(url, "_blank", "noreferrer");
};

export const onSubmit = (data: any) => {
  openInNewTab(
    `${Label.MESSAGE_DELIVERY} Pedido a nombre de: ${data.firstName} Direccion: ${data.address} PROXIMAMENTE la orden`
  );
};
