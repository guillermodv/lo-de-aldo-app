import { Product } from "@/data/shopData";

interface props {
  cartItems: Product[];
}

export default function CartSummary({ cartItems }: props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Resumen del Carrito</h2>

      {/* Listado de productos en el carrito */}
      <div className="mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="ml-2">
                <p className="text-sm">{item.name}</p>
                <p className="text-gray-500 text-xs">
                  Cantidad: {item.quantity}
                </p>
              </div>
            </div>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>

      {/* Total del pago */}
      <div className="flex justify-between border-t pt-4">
        <p className="font-semibold">Total:</p>
        <p className="font-semibold">${"100"}</p>
      </div>
    </div>
  );
}
