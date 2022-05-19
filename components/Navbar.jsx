import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <h3>
          Fabby<span>Stich.</span>
        </h3>
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
        <HiOutlineShoppingBag />
        <FiUser />
      </div>
    </nav>
  );
};

export default Navbar;
