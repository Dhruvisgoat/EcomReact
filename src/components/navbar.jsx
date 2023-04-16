import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';
import { ShopContext } from "../Context/shop-context";
import './navbar.css';

export const Navbar = () => {
    const { cart } = React.useContext(ShopContext);
    const totalItems = Object.values(cart).reduce((acc, curr) => acc + curr, 0);
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/cart"><ShoppingCart /><span className="cart-count">{totalItems}</span></Link>
            </div>
        </div>
    );
}
