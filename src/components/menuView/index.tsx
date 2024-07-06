import { shop } from "@/data/shopData";
import Image from "next/image";
import BackLabel from "../backLabel";

interface MenuForm {
  showDescriptions: boolean;
  showImage: boolean;
}

export default function MenuForm({ showDescriptions, showImage }: MenuForm) {
  const categories = shop.categories;
  return (
    <div className="flex flex-col place-items-center w-full bg-gray-200 text-black">
      <Image
        src="/logotipo.jpeg"
        className="mx-4 my-2"
        alt="Logo Aldo"
        width={190}
        height={480}
      />
      {categories?.map((category, key) => (
        <div className="md:w-4/5 w-full px-2" key={key}>
          <div className="flex flex-col">
            <div className="font-bold text-xl pt-2">
              {category.name.toUpperCase()}
            </div>
            {showDescriptions && (
              <div className="text-xl"> {category.description}</div>
            )}
          </div>
          {category.subcategories?.map((subcategory, key) => (
            <div key={key}>
              <div>
                <div className="flex flex-row justify-between  border-gray-600 border-2 mb-1 rounded-md bg-slate-300">
                  <div className="flex flex-col w-4/5">
                    <div className="flex flex-row justify-between">
                      <div className="px-1 font-mono text-xs md:text-base">
                        {subcategory.name}
                      </div>
                      <div className="px-1 font-mono  text-xs md:text-base justify-end">
                        {subcategory.price}$ pesos
                      </div>
                    </div>
                    {subcategory.description && (
                      <div className="font-bold px-1 text-xs md:text-base">
                        {subcategory.description}
                      </div>
                    )}
                  </div>
                  {showImage && (
                    <div className="flex flex-end">
                      <Image
                        src={subcategory.image}
                        className="mx-1 my-1"
                        alt="Logo Aldo"
                        width={70}
                        height={60}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <BackLabel />
    </div>
  );
}
