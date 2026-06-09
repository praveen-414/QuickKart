import React from "react";
import User from "../assets/user1.png";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCartItem } from "../redux/slices/cartSlice";
import { decrementValue, removeCartItem } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  // subtotal calculation
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const tax = subTotal * 0.1;
  const total = subTotal + tax;

  return (
    <section className="w-[90vw] lg:w-[85vw] mx-auto mt-4">
      <h1 className="text-3xl lg:text-4xl font-semibold mb-6 lg:mb-10 underline">
        Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {/* CART ITEMS */}
        <div className="flex flex-col gap-6 flex-1 max-h-[70vh] overflow-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col w-full justify-center items-center h-[50vh]">
              <h1 className="text-center mb-5 text-lg lg:text-xl">
                Your Cart Is Empty...!
              </h1>
              <Link to="/categories">
                <Button text="Shop Now" />
              </Link>
            </div>
          ) : (
            cartItems.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex items-center justify-between gap-3 p-3 hover:bg-gray-100 transition"
              >
                {/* IMAGE */}
                <div className="border border-gray-300 p-2 shrink-0">
                  <img
                    className="w-16 sm:w-20 object-contain"
                    src={cartItem.image}
                    alt={cartItem.title}
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1">
                  <h2 className="text-sm sm:text-base font-semibold line-clamp-2">
                    {cartItem.title}
                  </h2>

                  <h3 className="font-semibold text-sm sm:text-base">
                    $ {(cartItem.price * (cartItem.quantity || 1)).toFixed(2)}
                  </h3>
                </div>

                {/* ACTIONS */}
                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => dispatch(removeCartItem(cartItem.id))}
                    className="text-red-500 hover:scale-110 cursor-pointer"
                  >
                    <RxCross2 />
                  </button>

                  <div className="flex gap-3 border border-gray-300 rounded items-center px-2 py-1">
                    <button
                      onClick={() => dispatch(decrementValue(cartItem.id))}
                      className="text-lg font-bold hover:scale-120 cursor-pointer"
                    >
                      -
                    </button>

                    <span className="text-sm">{cartItem.quantity || 1}</span>

                    <button
                      onClick={() => dispatch(addToCartItem(cartItem))}
                      className="text-lg font-bold hover:scale-110 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ORDER SUMMARY */}

        {cartItems.length > 0 && (
          <div className="w-full lg:w-[35%]">
            {/* <div>
           <h3>Address</h3>
              </div> */}
            <div className="border border-gray-400 rounded-2xl p-5 flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-[var(--primary)] underline">
                Order Summary
              </h1>

              <div className="flex justify-between">
                <span className="font-semibold">SubTotal</span>
                <span>$ {subTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-semibold">Tax</span>
                <span>$ {tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>$ {total.toFixed(2)}</span>
              </div>

              <Button
                text="Proceed to Checkout"
                onClick={() => navigate("/address")}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
