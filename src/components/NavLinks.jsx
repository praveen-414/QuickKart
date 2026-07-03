import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const NavLinks = ({ menuOpen, setMenu }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setMenu]);

  const navLinkClass = ({ isActive }) =>
    `after:content-['']
    after:absolute
    after:left-0
    after:bottom-[-14px]
    after:h-[2px]
    after:bg-[#111827]
    after:transition-all
    after:duration-300
    ${
      isActive
        ? "after:w-full text-[#111827] font-bold"
        : "after:w-0 hover:after:w-full text-gray-700"
    }`;

  return (
    <>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-21 right-0 h-screen w-screen flex flex-col gap-2 bg-gray-100 pt-10 shadow-md rounded">
          <li
            onClick={() => setMenu(false)}
            className="hover:bg-white w-full text-center py-2 transition-all duration-300"
          >
            <Link to="/">Home</Link>
          </li>

          <li
            onClick={() => setMenu(false)}
            className="hover:bg-white w-full text-center py-2 transition-all duration-300"
          >
            <Link to="/categories">Categories</Link>
          </li>

          <li
            onClick={() => setMenu(false)}
            className="hover:bg-white w-full text-center py-2 transition-all duration-300"
          >
            <Link to="/orders">My Orders</Link>
          </li>

          <li
            onClick={() => setMenu(false)}
            className="hover:bg-white w-full text-center py-2 transition-all duration-300"
          >
            <Link to="/services">Services</Link>
          </li>

          <li
            onClick={() => setMenu(false)}
            className="hover:bg-white w-full text-center py-2 transition-all duration-300"
          >
            <Link to="/about us">About Us</Link>
          </li>

          <li
            onClick={() => setMenu(false)}
            className="hover:bg-white w-full text-center py-2 transition-all duration-300"
          >
            <Link to="/contact us">Contact Us</Link>
          </li>

          <li onClick={() => setMenu(false)} className="text-center">
            <Link to="/Account">
              <Button text="Login" />
            </Link>
          </li>
        </ul>
      )}

      {/* Desktop Menu */}
      <nav className="w-full md:block hidden py-4 bg-gray-100">
        <ul className="flex w-[85vw] mx-auto gap-15">
          <li className="relative">
            <NavLink className={navLinkClass} to="/">
              Home
            </NavLink>
          </li>

          <li className="relative">
            <NavLink className={navLinkClass} to="/categories">
              Categories
            </NavLink>
          </li>

          <li className="relative">
            <NavLink className={navLinkClass} to="/orders">
              My Orders
            </NavLink>
          </li>

          <li className="relative">
            <NavLink className={navLinkClass} to="/services">
              Services
            </NavLink>
          </li>

          <li className="relative">
            <NavLink className={navLinkClass} to="/about us">
              About Us
            </NavLink>
          </li>

          <li className="relative">
            <NavLink className={navLinkClass} to="/contact us">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavLinks;