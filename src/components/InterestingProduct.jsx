import React from "react";
import photo from "../img/Group 117.png";
import s from "../style/interesting.module.css";

export default function InterestingProduct() {
  return (
    <div className={s.div}>
      <img src={photo} alt="" />
    </div>
  );
}
