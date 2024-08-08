import Link from "next/link";
import { Suspense } from "react";

interface Props {
  productCount: number;
  params: any;
  products: any[]; // Lista de productos
}

export default function CartFooter({ productCount, params, products }: Props) {
  console.log("products", products);
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="font-bold text-lg text-orange-500">
          Productos seleccionados:
        </span>
        <span className="text-xl ml-2 transition transform hover:scale-110">
          {productCount}
        </span>
        <div className="flex ml-4 space-x-2">
          {products?.slice(0, 3).map((cart) => (
            <img
              key={cart.id}
              src={cart.product.image}
              alt={cart.name}
              className="w-12 h-12 object-cover rounded"
              title={cart.name}
            />
          ))}
          {products?.length > 3 && (
            <div className="w-12 h-12 flex items-center justify-center bg-gray-600 rounded">
              <span className="text-white">+{products.length - 3}</span>
            </div>
          )}
        </div>
      </div>
      <Suspense>
        <Link
          href={`/cartPayment?${params}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Ver Carrito
        </Link>
      </Suspense>
    </footer>
  );
}
