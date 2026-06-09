import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-10">
      {/* about heading  */}

      <div className="bg-[var(--primary)] flex flex-col gap-4 py-7 sm:px-3 md:px-3">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center text-white">
          About Our Store
        </h1>
        <p className="text-center text-white">
          We bring you premium products with quality, trust, and fast delivery.
        </p>
      </div>

      {/* about contents  */}

     <div className="grid lg:grid-cols-2 grid-cols-1 w-[90vw] mx-auto py-10 gap-6">
  
  {/* image div */}
  <div className="w-full">
    <img
      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
      alt="about"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* content */}
  <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-10 gap-4">
    <h2 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
      Who We Are
    </h2>

    <p className="text-sm sm:text-base">
      We are a passionate team dedicated to delivering the best shopping
      experience. Our goal is to provide high-quality products at
      affordable prices.
    </p>

    <p className="text-sm sm:text-base">
      With a strong focus on customer satisfaction, we ensure fast
      delivery, secure payments, and excellent support.
    </p>
  </div>

</div>

      {/* stats section  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[85vw] mx-auto gap-5">
        <div className=" flex flex-col items-center shadow-md py-7">
          <h3 className="font-bold text-xl">10K+</h3>
          <p className="text-[var(--light-gray)]">Customers</p>
        </div>
        <div className=" flex flex-col items-center shadow-md py-7">
          <h3 className="font-bold text-xl">500+</h3>
          <p className="text-[var(--light-gray)]">Products</p>
        </div>
        <div className=" flex flex-col items-center shadow-md py-7">
          <h3 className="font-bold text-xl">4.8★</h3>
          <p className="text-[var(--light-gray)]">Rating</p>
        </div>
        <div className=" flex flex-col items-center shadow-md py-7">
          <h3 className="font-bold text-xl">24/7</h3>
          <p className="text-[var(--light-gray)]">Support</p>
        </div>
      </div>

      {/* join community  */}
      <div className="bg-[var(--primary)] flex flex-col gap-4 py-10 items-center">
        <h2 className="text-3xl font-bold text-center text-white">
          {" "}
          Join Our Journey 🚀
        </h2>
        <p className="text-center text-white">
          Explore our products and experience the best shopping today.
        </p>
        <Link to="/categories">
          {" "}
          <Button
            className="w-fit hover:text-white border border-white"
            text="Shop Now"
          />
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
