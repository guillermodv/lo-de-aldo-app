import { Label } from "@/constants/label";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useContext } from "react";

import { CartContext } from "@/context";
import { CartItem, Product, shop } from "../../data/shopData";
import BackLabel from "../backLabel";
import CartFooter from "../cartFooter";
import GoBackButton from "../goBackButton";

const selectedStyle =
  "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110";

const nonSelectedStyle =
  "bg-blue-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-110";

export default function NewOrderForm() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get("firstName");
  const address = searchParams.get("address");
  const categories = shop.categories;
  let { cart, setCart } = useContext(CartContext);

  const onAdd = (product: Product, quantity: number) => {
    const oldCart = cart;
    let productCart: CartItem = {
      id: Math.random().toString(36).substring(2, 9),
      product: product,
      quantity: quantity,
    };
    const newCart = [...oldCart, productCart];
    setCart(newCart);
  };

  const isSelected = useCallback(
    (name: string) => {
      return cart.some((item: CartItem) => item.product.name === name);
    },
    [cart]
  );

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
          <GoBackButton />
          <div className="font-bold mx-4 mt-4 mb-2 text-green-800">
            {Label.COMPLETE_FORM_LABEL.toUpperCase()}
          </div>
          <div className="font-mono md:text-xl text-sm">{`Hola! ${firstName}`}</div>
          <div className="font-mono md:text-xl text-sm p-2">
            {`Pedido a entregar en: ${address}`}
          </div>
          {categories?.map((category, key) => (
            <div className="md:w-4/5 w-full px-2" key={key}>
              <div className="flex flex-col">
                <div className="font-bold md:text-xl text-orange-500 text-sm pt-2">
                  {category.name.toUpperCase()}
                </div>
              </div>
              <div className="grid sm:grid-cols-4 grid-cols-2">
                {category.subcategories?.map((subcategory, key) => (
                  <div
                    key={key}
                    className=" border-gray-400 border-2 mb-1 rounded-md bg-slate-200 m-1"
                  >
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <div className="px-4 py-4">
                        <div className="font-bold text-sm md:text-xl mb-2">
                          {subcategory.name}
                        </div>
                        <p className="text-gray-700  text-sm md:text-xl">
                          {subcategory.description}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="md:text-xl text-sm font-bold">
                            ${subcategory.price}
                          </div>
                          <button
                            onClick={() => onAdd(subcategory, 1)}
                            className={
                              isSelected(subcategory.name)
                                ? selectedStyle
                                : nonSelectedStyle
                            }
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
          <CartFooter productCount={cart.length} params={searchParams} />
          <BackLabel />
        </div>
      </div>
    </Suspense>
  );
}
