import React, { useState } from "react";
import data from "../utils/data";
import s from "../style/product.module.css";
import i_rebbot from "../assets/icon/i_reboot.png";
import i_like from "../assets/icon/i_like.png";
import i_cart from "../assets/icon/i_cart.png";
import i_cart2 from "../assets/icon/shopping-cart.png";

const Products = ({ start, end }) => {
  const slicedData = data.slice(start - 1, end);
  const [cartIcons, setCartIcons] = useState(
    Array(slicedData.length).fill(i_cart)
  );

  const handleCartClick = (index) => {
    const newCartIcons = [...cartIcons];
    newCartIcons[index] = cartIcons[index] === i_cart ? i_cart2 : i_cart;
    setCartIcons(newCartIcons);
  };

  return (
    <div className={s.container_products}>
      {slicedData.map((item, index) => (
        <div key={item.id} className={s.one_product}>
          <div className={s.product_info}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
          <div className={s.container_icon}>
            <img src={i_rebbot} alt="rebbot" />
            <img src={i_like} alt="like" />
            <img
              src={cartIcons[index]}
              alt="cart"
              onClick={() => handleCartClick(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
