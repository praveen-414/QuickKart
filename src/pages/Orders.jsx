import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <section className="w-[90vw] lg:w-[85vw] mx-auto py-8">
      <h1 className="text-3xl lg:text-4xl font-bold mb-8 underline">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="flex justify-center items-center h-[50vh]">
          <h2 className="text-xl font-semibold">No Orders Found</h2>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-5 flex flex-col md:flex-row gap-6 bg-white shadow-sm"
            >
              {/* Product Image */}
              <div className="border border-gray-300 rounded-lg p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-lg font-semibold line-clamp-2">
                  {item.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  Price: ${item.price}
                </p>

                <p className="mt-1 text-gray-600">
                  Quantity: {item.quantity}
                </p>

                <p className="mt-1 font-semibold">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <p className="mt-1 text-gray-600">
                  Order Date: {item.orderDate || "Today"}
                </p>

                <span
                  className={`inline-block mt-4 px-4 py-1 rounded-full font-medium ${
                    item.status === "Processing"
                      ? "bg-yellow-100 text-yellow-700"
                      : item.status === "Shipped"
                      ? "bg-blue-100 text-blue-700"
                      : item.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status || "Processing"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Orders;