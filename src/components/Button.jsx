import React from "react";

const button = ({ text, onClick, className = "", ...props }) => {
  const baseStyling =
    "border bg-[var(--primary)] text-white rounded-[5px] p-2 px-6 hover:bg-transparent transition-all duration-300 hover:border hover:text-[var(--primary)] cursor-pointer font-bold active:scale-95";
  return (
    <button
      onClick={onClick}
      className={`${baseStyling} ${className}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default button;
