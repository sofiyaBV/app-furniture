import React from "react";
import Products from "./Products";

const CompProduct = ({ start, end }) => {
  return (
    <div>
      <Products start={start} end={end} />
    </div>
  );
};
export default CompProduct;
