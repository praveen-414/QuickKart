import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <PropagateLoader />
      ) : (
        <div className="bg-white rounded-md min-h-[35vh] flex flex-col justify-center px-20 py-10 gap-5">
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-full border-2 border-green-500 flex justify-center items-center">
              <TiTick size={40} color="#22C55E" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-[var(--primary)]">
            Your Order is Confirmed!
          </h1>

          <p className="text-center text-[var(--light-gray)]">
            We'll send you a shipping confirmation email
            <br />
            as soon as your order ships.
          </p>

          <Button
            text="Continue Shopping"
            onClick={() => navigate("/")}
          />

          <Button text="View My Orders" onClick={() => navigate("/orders")} />
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
