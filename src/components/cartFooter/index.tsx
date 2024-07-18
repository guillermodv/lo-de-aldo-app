import Link from "next/link";

interface props {
  productCount: number;
  params: any;
}

export default function CartFooter({ productCount, params }: props) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <span className="font-bold text-lg">Productos en el carrito:</span>
        <span className="text-xl ml-2">{productCount}</span>
      </div>
      <Link
        href={`/cartPayment?${params}`}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Ver Carrito
      </Link>
    </footer>
  );
}
