import Image from "next/image";

import { Label } from "./constants/label";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-items-center justify-between pt-10">
      <div className="flex flex-col place-item-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/logotipo.png"
          alt="Logo Aldo"
          width={840}
          height={480}
          priority
        />
      </div>
      <div className="flex flex-col place-items-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/mercadopago.png"
          alt="Logo Aldo"
          width={840}
          height={150}
          priority
        />
      </div>
      <div className="grid place-items-center w-10/12 bg-gray-400 p-2">
        {Label.WORK_ZONE_TITLE.toUpperCase()}
      </div>
      <div className="grid place-items-center w-10/12 bg-white text-black p-4">
        <div className="font-bold">{Label.WORK_TIME_TITLE.toUpperCase()}</div>
        <div>{Label.WORK_TIME}</div>
      </div>
      <div className="flex flex-col place-items-center w-10/12 bg-gray-300 text-black p-4">
        <div className="font-bold">{Label.SHOP_NAME}</div>
        <div>{Label.DIGITAL_MENU_LABEL}</div>
      </div>
      <div className="flex flex-col text-center">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] "
          src="/iceCream.jpg"
          alt="Logo Aldo"
          width={840}
          height={180}
          priority
        />
      </div>
      <div className="grid text-center bg-slate-300 w-10/12 p-4">
        {Label.REGARDS_LABEL}
      </div>
      <div className="grid text-center bg-white w-10/12 p-6 text-black">
        {Label.PAYMENT_METHODS_LABEL}
      </div>
      <div className="grid text-center bg-green-800 m-2 p-2 w-10/12 rounded-md text-white">
        {Label.DELIVEY_lABEL}
      </div>
      <div className="grid text-center  bg-green-800 m-2 p-2 w-10/12 rounded-md text-white">
        {Label.TAKEIT_lABEL}
      </div>
      <div className="grid text-center  bg-white p-4 w-10/12 text-black font-extrabold">
        {Label.AUTHOR}
      </div>
    </main>
  );
}
