import Link from "next/link";
import { Suspense } from "react";

interface props {
  productCount: number;
  params: any;
}

export default function CartFooter({ productCount, params }: props) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <span className="font-bold text-lg">Productos en el carrito:</span>
        <span className="text-xl ml-2 transition transform hover:scale-110">
          {productCount}
        </span>
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
