import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { TiTick } from "react-icons/ti";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <PropagateLoader />
      ) : (
        <div className="bg-white rounded-md min-h-[35vh] flex flex-col justify-center px-20 gap-3 py-10">
          <div className="w-full flex justify-center">
            <div className="h-20 w-20 rounded-full border-2 border-[#00FF00] flex justify-center items-center ">
              <TiTick size={40} color="#00FF00" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[var(--primary)] text-center">
            Your Order is Confirmed!
          </h1>
          <p className="text-center text-[var(--light-gray)]">
            We'll send you a shipping confirmation email <br /> as soon as your
            order ships.
          </p>
          <Link to="/" className="text-center">
            {" "}
            <Button text="Continue Shopping" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
