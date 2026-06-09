import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../redux/slices/ActiveTab";

const CategoriesTab = () => {
  const dispatch = useDispatch();
  const { tab, categories } = useSelector((state) => state.categoryTab);

  return (
    <div className="lg:w-[85vw] w-[90vw] mx-auto">
      <div className="flex flex-wrap leading-tight justify-center lg:gap-15 gap-8">
        {categories.map((categorie) => {
          return (
            <button
              key={categorie}
              className={`px-4 py-1 text-[1.1rem] transition-all duration-300 rounded cursor-pointer
            ${tab === categorie ? "bg-[var(--primary)] text-white" : "bg-gray-100 hover:bg-[var(--primary)] hover:text-white"}`}
              onClick={() => dispatch(setTab(categorie))}
            >
              {categorie}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesTab;
