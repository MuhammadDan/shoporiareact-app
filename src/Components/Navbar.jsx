import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo1 from "../assets/Logo1.jpg";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const [IsMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!IsMobileMenuOpen);
  };
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between h-16 shadow-md px-5 md:px-10 fixed top-0 left-0 right-0 z-50 bg-emerald-400">
        <div className="flex items-center space-x-2">
          <img
            src={Logo1}
            className="h-12 w-12 bg-emerald-400 mt-2 rounded-full"
            alt="Websitelogo"
          />
          <h1 className="font-semibold text-xl cursor-pointer">Shopria</h1>
        </div>
        <div className="hidden md:flex gap-14 items-center mr-40">
          <NavLink className="md:text-lg" to="/">
            <h4>Home</h4>
          </NavLink>
          <NavLink className="md:text-lg" to="/cart">
            <FaShoppingCart />
          </NavLink>
          <button className="bg-yellow-200 px-3 py-2 rounded-md">Login</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-lg">
            ☰
          </button>
        </div>
        {IsMobileMenuOpen && (
          <div className="absolute top-14 w-full mr-0 left-0 flex flex-col h-32 items-center gap-y-5 mt-2 z-50 bg-emerald-400  md:hidden">
            <NavLink
              className="cursor-pointer text-lg hover:scale-105 duration-200"
              to="/"
            >
              <h4>Home</h4>
            </NavLink>
            <NavLink
              className="cursor-pointer text-lg hover:scale-105 duration-200"
              to="/cart"
            >
              <FaShoppingCart />
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
