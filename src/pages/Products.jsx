import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProductsData } from "../redux/slices/productSlice";
import Button from "../components/Button";
import { addToCartItem } from "../redux/slices/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.categoryTab);
  const { items, status } = useSelector((state) => state.products);
  // console.log(items);

  const { search } = useSelector((state) => state.searching);

  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  if (status === "Loading...") {
    return (
      <h1 className="text-center mt-10 mb-5 text-xl">Loading products...</h1>
    );
  }

  // ✅ Error state
  if (status === "Failed") {
    return (
      <h1 className="text-center mt-10 text-xl text-red-500">
        Failed to load products
      </h1>
    );
  }
  const filteredProducts = items.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      tab === "All" ||
      (tab === "Mens" && item.category === "men's clothing") ||
      (tab === "Womens" && item.category === "women's clothing") ||
      (tab === "Jewelery" && item.category === "jewelery");

    return matchSearch && matchCategory;
  });
  return (
    <div className="w-[85vw] mx-auto ">
      {/* Products  */}
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {filteredProducts.length === 0 ? (
          <h1 className="mt-10 text-xl">No Products Found...</h1>
        ) : (
          filteredProducts.slice(0, visibleCount).map((item) => {
            // product card
            return (
              <div
                key={item.id}
                className="flex flex-col h-auto bg-gray-100 rounded-b-lg gap-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 pb-3"
              >
                <div className="flex justify-center flex-1 p-2">
                  <img
                    className="w-1/2 object-contain transition-transform duration-300 hover:scale-110"
                    src={item.image}
                  />
                </div>
                <div className="flex flex-col px-4 gap-1">
                  <p>
                    <span>Rating : </span>
                    {item.rating.rate}
                  </p>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="font-bold text-[.9rem]">$ {item.price}</p>
                  <Button
                    text="Add To Cart"
                    onClick={() => {
                      dispatch(addToCartItem(item));
                  
                    }}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* View All Button  */}

      {filteredProducts.length > 8 && (
        <div className="flex justify-center w-full mt-10 mb-10">
          <Button
            onClick={() => {
              setVisibleCount(visibleCount === 8 ? filteredProducts.length : 8);
            }}
            text={visibleCount === 8 ? "View All" : "Show Less"}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
