import React from "react";
import { motion } from "framer-motion";
import "./styles/homeProduct.css";
function Top3Products({ product }) {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={product.prodcutImage} alt="mouse corsair" className="mouse" />
      </div>
      <div className="contentBox">
        <h3>{product.productTitle}</h3>
        <h2 className="price">{product.productPrice} TND</h2>
        <a href="#" className="buy">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Top3Products;
