import { PlusCircle } from "phosphor-react";
import React,{useContext} from "react";
import { ShopContext } from "../Context/shop-context";

export const Product = (props) => {
    const{addtocart,cart}=useContext(ShopContext);
    const { id, ProductName,price,ProductImage } = props.data;
    const cartitem=cart[id];
    return (
        <div className="Product">
            <img src={ProductImage} height="200px"width="200px" alt="ProductImage" />
            <h3>{ProductName}</h3>
            <h4>{`$ ${price}`}</h4>
            <button onClick={()=>addtocart(id)}>Add to Cart{cartitem>0&&<>({cartitem})</>}</button>
        </div>
    );
}
