import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link href="/">
          <h3>
            Fabby<span>Stich.</span>
          </h3>
        </Link>
      </div>
      <ul className="navbar-links">
        {["New", "Dresses", "Accessories", "Baby & Kids", "Summer", "Sale"].map(
          (item) => (
            <li key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <div className="navbar-icons">
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <HiOutlineShoppingBag />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        <FiUser />

        {showCart && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
