"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

import WhatsappLogo from "../components/whatsappLogo";
import { Label } from "../constants/label";

const openInNewTab = (url: string): void => {
  window.open(url, "_blank", "noreferrer");
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    openInNewTab(
      `${Label.MESSAGE_DELIVERY} Pedido a nombre de: ${data.firstName} Direccion: ${data.address} Detalle: ${data.quantity} `
    );
  };

  return (
    <main className="flex flex-col max-w-full items-center justify-between pt-4 w:12/12">
      <div className="flex flex-col place-item-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/logotipo.jpeg"
          alt="Logo Aldo"
          width={540}
          height={480}
          priority
        />
      </div>

      <div className="flex flex-col place-items-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/mercadopago.png"
          alt="Logo Aldo"
          width={540}
          height={150}
          priority
        />
      </div>

      <div className="flex flex-col place-items-center lg:w-10/12 w-12/12 md:w-10/12 bg-gray-300 p-2 font-extrabold">
        {Label.WORK_ZONE_TITLE.toUpperCase()}
        <div className="p-2">
          <iframe
            width="400"
            height="300"
            src="https://maps.google.com/maps?q=wilde&t=&z=14&ie=UTF8&iwloc=&output=embed"
            title="Aldo"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col place-items-center lg:w-10/12 w-12/12 md:w-10/12 bg-white text-black p-4">
        <div className="font-bold">{Label.WORK_TIME_TITLE.toUpperCase()}</div>
        <div>{Label.WORK_TIME}</div>
      </div>
      <div className="flex flex-col place-items-center lg:w-10/12 w-12/12 md:w-10/12 bg-gray-200 text-black p-4">
        <div className="font-bold">{Label.SHOP_NAME}</div>
        <div>{Label.DIGITAL_MENU_LABEL}</div>
      </div>

      <div className="flex flex-col text-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/muzzarella.jpeg"
          alt="Logo Aldo"
          width={640}
          height={80}
          priority
        />
      </div>

      <div className="flex flex-col text-center bg-gray-200 w-10/12 text-black">
        <div className="font-bold mx-4 mt-4">
          {Label.COMPLETE_FORM_LABEL.toUpperCase()}
        </div>
        <div className="mx-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="py-1 font-mono">
              <label htmlFor="firstName">Nombre: </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName", {
                  required: true,
                  maxLength: 40,
                  minLength: 2,
                })}
              />
              {errors.firstName && (
                <span className="text-red-500"> Ingrese Nombre</span>
              )}
            </div>

            <div className="py-1 font-mono">
              <label htmlFor="address">Direccion: </label>
              <input
                id="address"
                type="text"
                {...register("address", {
                  required: true,
                  maxLength: 120,
                  minLength: 2,
                })}
              />
              {errors.address && (
                <span className="text-red-500"> Ingrese Dirección</span>
              )}
            </div>

            <div className="py-1 font-mono">
              <label htmlFor="details">Detalle: </label>
              <input
                id="details"
                type="text"
                {...register("details", {
                  required: true,
                  maxLength: 2,
                })}
              />
              {errors.details && (
                <span className="text-red-500">
                  {" "}
                  Ingrese detalle del pedido.
                </span>
              )}
            </div>
            <button
              className="mt-4 align-middle select-none font-sans font-bold uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg  bg-green-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none items-center gap-3"
              type="submit"
            >
              <div className="m-1 flex items-center font-extrabold hover:font-bold">
                <WhatsappLogo /> {Label.DELIVERY_lABEL}
              </div>
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col text-center font-mono bg-slate-200 w-10/12 p-4">
        {Label.REGARDS_LABEL}
      </div>
      <div className="flex flex-col font-sans hover:font-bold text-center bg-grey-100 p-2 w-10/12 text-black font-extrabold">
        {Label.AUTHOR}
      </div>
    </main>
  );
}
