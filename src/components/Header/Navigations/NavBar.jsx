import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="flex justify-between items-center gap-2">
      <li>
        <Link className="text-nowrap" to="/">Home</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/about">About Us</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/how-it-works">How It Works</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/why-us">Why Us</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/our-services">Our Services</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/create-an-order">create an Order</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/hiring">Hiring</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/blog">Blog</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/offers">Offers</Link>
      </li>
      <li>
        <Link className="text-nowrap" to="/contact">Contact Us</Link>
      </li>
    </ul>
  );
};

export default NavBar;
