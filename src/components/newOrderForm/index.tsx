import { Label } from "@/constants/label";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useContext } from "react";
import { useForm } from "react-hook-form";

import { CartContext } from "@/context";
import { Product, shop } from "../../data/shopData";
import BackLabel from "../backLabel";
import CartFooter from "../cartFooter";

export default function NewOrderForm() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const address = searchParams.get("address");
  const categories = shop.categories;
  let { cart, setCart } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onAdd = (product: Product) => {
    const oldCart = cart;
    const newCart = [...oldCart, product];
    console.log("carrito", newCart);
    setCart(newCart);
  };

  return (
    <Suspense>
      <div>
        <div className="flex flex-col place-items-center w-full bg-gray-200 text-black">
          <Image
            src="/logo.jpeg"
            className="mx-4 my-2"
            alt="Logo Aldo"
            width={120}
            height={380}
          />
          <div className="font-bold mx-4 mt-4 mb-2 text-green-800">
            {Label.COMPLETE_FORM_LABEL.toUpperCase()}
          </div>
          <div className="font-mono md:text-xl text-sm">{`Hola! ${firstName}`}</div>
          <div className="font-mono md:text-xl text-sm">
            {`Pedido a entregar en: ${address}`}
          </div>
          {categories?.map((category, key) => (
            <div className="md:w-4/5 w-full px-2" key={key}>
              <div className="flex flex-col">
                <div className="font-bold md:text-xl text-orange-500 text-sm pt-2">
                  {category.name.toUpperCase()}
                </div>
              </div>
              <div className="grid sm:grid-cols-3 grid-cols-2 p-4">
                {category.subcategories?.map((subcategory, key) => (
                  <div
                    key={key}
                    className=" border-gray-400 border-2 mb-1 rounded-md bg-slate-200 m-2"
                  >
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img
                        className="w-full"
                        src="muzza.jpeg"
                        alt="Product Image"
                      />
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                          {subcategory.name}
                        </div>
                        <p className="text-gray-700 text-base">
                          {subcategory.description}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="text-xl font-bold">
                            ${subcategory.price}
                          </div>
                          <button
                            onClick={() => onAdd(subcategory)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <CartFooter productCount={cart.length} />
          <BackLabel />
        </div>
      </div>
    </Suspense>
  );
}
