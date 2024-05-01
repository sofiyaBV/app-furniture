import React from "react";
import i_user from "../assets/icon/i_user.png";
import i_search from "../assets/icon/i_search.png";
import i_purchases from "../assets/icon/i_purchases.png";
import s from "../style/header.module.css";

export default function Header() {
  return (
    <div className={s.div_container}>
      <h2>Drile</h2>
      <div className={s.div_container}>
        <li>Home</li>
        <li>Shop</li>
        <li>Product</li>
        <li>Blog</li>
        <li>Page</li>
        <li>Contact</li>
      </div>
      <div className={s.div_container}>
        <img className={s.first_image} src={i_search} alt="Іконка" />
        <img src={i_purchases} alt="Іконка" />
        <img src={i_user} alt="Іконка" />
      </div>
    </div>
  );
}
