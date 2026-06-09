import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const CheckOutPage = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0,
  );

  const tax = subTotal * 0.1;
  const total = subTotal + tax;
  return (
    <section className="w-[90vw] lg:w-[85vw] mx-auto mt-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* ORDER SUMMARY */}

      <div>
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
                text="Place Order"
                onClick={() => navigate("/orderSuccess")}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CheckOutPage;
