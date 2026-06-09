import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/searchSlice";
import { MoonLoader } from "react-spinners";
import { FaUser } from "react-icons/fa6";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenu] = useState(false);
  const [isInputActive, setInputActive] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(true);

  const toggleHamburger = () => {
    setMenu(!menuOpen);
  };

  const showInput = () => {
    setInputActive(!isInputActive);
  };

  const cartCount = cartItems.length;

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <MoonLoader />
      ) : (
        <header
          className={`w-full z-50 fixed top-0 left-0 bg-white transition-[box-shadow,transform] duration-300 ${
            isSticky ? "shadow-md translate-y-0" : "shadow-none translate-y-0"
          }`}
        >
          <div className="flex justify-between items-center h-full lg:w-[85vw] w-[90vw] mx-auto py-6">
            <Link to="/">
              <h1 className="lg:text-4xl lg:font-bold text-3xl font-semibold text-[#111827]">
                QuickKart
              </h1>
            </Link>

            {/* search box */}
            <div
              tabIndex={0}
              className="border border-gray-300 lg:w-1/3 md:w-1/2 hidden md:flex focus-within:ring-2 focus-within:ring-[#111827]  justify-between items-center h-[40px] rounded"
            >
              <input
                onChange={(e) => dispatch(setSearch(e.target.value))}
                className="flex-1 h-full outline-0 px-4"
                type="text"
                placeholder="Search Products..."
              />
              <span className="h-full w-[40px] flex justify-center items-center shrink-0 hover:bg-[var(--primary)] rounded-tr rounded-br hover:text-white transition-all duration-300 cursor-pointer">
                <IoSearch />
              </span>
            </div>

            {/* action icons */}
            <div className="flex items-center lg:gap-7 gap-3">
              {isInputActive ? (
                <>
                  <div className="border border-gray-300 flex justify-between items-center h-[40px] rounded md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute top-25 w-[90%] max-w-[500px] z-50 bg-white">
                    <input
                      onChange={(e) => dispatch(setSearch(e.target.value))}
                      className="flex-1 h-full outline-0 px-4"
                      type="text"
                      placeholder="Search Products..."
                    />
                    <span className="h-full w-[40px] flex justify-center items-center shrink-0 hover:bg-[var(--primary)] rounded-tr rounded-br hover:text-white transition-all duration-300 cursor-pointer">
                      <IoSearch />
                    </span>
                  </div>

                  <ImCross
                    onClick={() => showInput()}
                    className="cursor-pointer active:scale-90"
                  />
                </>
              ) : (
                <span
                  onClick={() => showInput()}
                  className="h-[35px] w-[35px] lg:hidden md:hidden flex justify-center items-center shrink-0 hover:bg-[var(--primary)] rounded-full hover:text-white transition-all duration-300 cursor-pointer active:scale-90 bg-gray-100"
                >
                  <IoSearch />
                </span>
              )}

              <Link to="/cart">
                <span className="text-2xl active:scale-90 relative">
                  <MdShoppingCart className="active:scale-90" />

                  {cartCount > 0 && (
                    <span className="absolute top-[-10px] text-xs right-[-6px] h-4 w-4 text-center leading-4 rounded-full bg-gray-200 font-semibold">
                      {cartCount}
                    </span>
                  )}
                </span>
              </Link>

              {/* profile */}
              <div className="hidden md:block lg:flex ">
                <Button onClick={() => navigate("/account")} text="Sign Up" />
              </div>

              {/* Hamburger */}
              {menuOpen ? (
                <ImCross
                  className="cursor-pointer active:scale-90"
                  onClick={() => toggleHamburger()}
                />
              ) : (
                <GiHamburgerMenu
                  onClick={() => toggleHamburger()}
                  className="lg:hidden md:hidden text-2xl cursor-pointer active:scale-90"
                />
              )}
            </div>
          </div>

          <NavLinks menuOpen={menuOpen} setMenu={setMenu} />
        </header>
      )}
    </>
  );
};

export default Header;
