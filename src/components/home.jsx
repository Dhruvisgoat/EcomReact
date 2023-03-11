import React from "react";
import Products from "../product.js";
import { Product } from "./product.jsx";
import "./home.css";

export const Home = () => {
    return (
        <div className="Shop">
            <h1 className="ShopTitle">Home</h1>
            <div className="Products">
            {
                Products.map((product) => {
                    return (
                        <Product data={product}/>
                    );
                }
                )
            }
        </div>
    </div>
    );
}