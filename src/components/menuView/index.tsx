import { categories } from "@/data/categories";
import Image from "next/image";

export default function MenuForm() {
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
          <div className="font-bold text-2xl">
            {category.name.toUpperCase()}
          </div>
          {category.subcategories?.map((subcategory, key) => (
            <div key={key}>
              <div>
                <div className="flex flex-row justify-between  border-gray-600 border-2 mb-2 rounded-md bg-slate-300">
                  <div className="flex flex-col w-4/5">
                    <div className="flex flex-row justify-between">
                      <div className="p-1 font-mono text-xl">
                        {subcategory.name}
                      </div>
                      <div className="p-1 font-mono text-lg justify-end">
                        {subcategory.price}$ pesos
                      </div>
                    </div>
                    <div className="font-bold px-2">
                      {subcategory.description}
                    </div>
                  </div>
                  <div className="flex flex-end">
                    <Image
                      src={subcategory.image}
                      className="mx-4 my-2"
                      alt="Logo Aldo"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
