import React from "react";
import { ShopContext } from "../Context/shop-context";
import { Link } from "react-router-dom";
import Products from "../product";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
    const navigate = useNavigate();
    const { setgivenvalue, cart, removefromcart, addtocart, total } = React.useContext(ShopContext);
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="cart-items">
                {Products.map((product) => {
                    if (cart[product.id] > 0) {
                        return (
                            <div className="cart-item" key={product.id}>
                                <div className="cart-item-image">
                                    <img height="100px" width="100px" src={product.ProductImage} alt={product.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h3>{product.ProductName}</h3>
                                    <p>{product.price}</p>
                                    <div className="countHandler">
                                        <button onClick={() => removefromcart(product.id)}>-</button>
                                        <input value={cart[product.id]} onChange={(event) => setgivenvalue(product.id, Number(event.target.value))}/>
                                        <button onClick={() => addtocart(product.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
                )}
            </div>
            <div className="cart-total">
                <h3>Subtotal: {total > 0 ? total : "Cart is Empty"}</h3>

            </div>
            <div className="cart-checkout">
                <button className="btn btn-primary" onClick={() => navigate("/home")}>Continue</button>
                <button className="btn btn-success" onClick={() => navigate("/checkout")}>Checkout</button>
            </div>
        </div>
    );
}