import React from "react";
import Banner from "../assets/banner.png";
import Button from "./Button";

const Hero = () => {

  return (
    <section className="lg:w-[85vw] w-[90vw] mb-10 mx-auto flex lg:flex-row flex-col-reverse lg:h-[76vh] gap-5 md:flex-row">
      {/* content  */}
      <div className="flex-1 flex flex-col items-start justify-center px-3">
        <h1 className="lg:text-5xl md:text-2xl text-3xl leading-tight font-bold text-[var(--primary)]">
          Discover Premium Products, Delivered to Your Doorstep
        </h1>
        <p className="text-[var(--light-gray)]">
          Shop smarter, faster, and easier — everything you love, all in one
          place.
        </p>
        <p className="text-[var(--light-gray)]">
          Wide range of categories: fashion, electronics, home essentials
        </p>
        <p className="text-[var(--light-gray)]">
          Fast, reliable delivery with easy returns.
        </p>
      
      </div>

      {/* image  */}
      <div className="flex-1 flex">
        <img className="w-full h-full object-contain" src={Banner} alt="" />
      </div>
    </section>
  );
};

export default Hero;
