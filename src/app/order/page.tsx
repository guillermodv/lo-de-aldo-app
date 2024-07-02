"use client";
import { useForm } from "react-hook-form";

import WhatsappLogo from "@/components/whatsappLogo";
import { Label } from "@/constants/label";
import { onSubmit } from "@/util";

import { categories } from "../../data/categories";
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("categories-->", categories);

  return (
    <div className="flex flex-col place-items-center lg:w-10/12 w-96 md:w-10/12 bg-gray-200 text-black p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="font-bold mx-4 mt-4 mb-2">
          {Label.COMPLETE_FORM_LABEL.toUpperCase()}
        </div>
        {categories?.map((category, key) => (
          <div key={key} className="mx-4 mt-4 mb-2">
            <div className="font-semibold">{category.name}</div>
            {category.subcategories?.map((subcategory, key) => (
              <div key={key}>
                <div className="flex flex-row">
                  <label className="p-1">{subcategory.name}</label>
                  <div className="p-1"> precio: {subcategory.price} pesos</div>
                  <input
                    id="quantity"
                    type="text"
                    {...register("quantity", {
                      required: true,
                      maxLength: 40,
                      minLength: 2,
                    })}
                  />
                </div>
                {errors.quantity && (
                  <span className="font-sans text-red-500">
                    Ingrese quantity
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
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
  );
}
