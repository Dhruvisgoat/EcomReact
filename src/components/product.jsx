import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/shop-context";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export const Product = (props) => {
  const { addtocart, cart } = useContext(ShopContext);
  const { id, ProductName, price, ProductImage } = props.data;
  const [rating, setRating] = useState(0);
  const cartitem = cart[id];

  const handleStarClick = (starIndex) => {
    setRating(starIndex);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FaStar
            key={i}
            className="Star"
            onClick={() => handleStarClick(i)}
          />
        );
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(
          <FaStarHalfAlt
            key={i}
            className="Star"
            onClick={() => handleStarClick(i)}
          />
        );
      } else {
        stars.push(
          <FaRegStar
            key={i}
            className="Star"
            onClick={() => handleStarClick(i)}
          />
        );
      }
    }
    return stars;
  };

  return (
    <div className="Product">
      <img
        src={ProductImage}
        height="200px"
        width="200px"
        alt="ProductImage"
      />
      <h3>{ProductName}</h3>
      <h4>{`₹${price}`}</h4>
      <div className="StarContainer">{renderStars()}</div>
      <button onClick={() => addtocart(id)}>Add to Cart{cartitem > 0 && <>({cartitem})</>}</button>
    </div>
  );
};
