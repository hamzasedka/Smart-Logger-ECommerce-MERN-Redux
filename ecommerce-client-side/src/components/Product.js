import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";

import { Link } from "react-router-dom";
function Product({ item }) {
  const path = "productDetails/" + item._id;
  var starsArray = [];
  for (let index = 0; index < 5; index++) {
    if (index < item.productRating) {
      starsArray.push(true);
    } else {
      starsArray.push(false);
    }
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
    >
      <div className="card_product">
        <div className="card__content">
          <img src={item.prodcutImage} alt="" className="card__img" />

          <div className="card__data">
            <h1 className="card__title">{item.productTitle}</h1>
            <span className="card__preci">{item.productPrice}TND</span>
            <div className="button-cart-details">
              <Link
                to={path}
                style={{ textDecoration: "none", marginRight: "5px" }}
              >
                <button className="card__button">Details</button>
              </Link>
              <Link to={path} style={{ textDecoration: "none" }}>
                <button className="card__button"> Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="rate">
            {starsArray.map((res, index) => (
              <a href="#!" key={index} className={res ? "active" : "disactive"}>
                ★
              </a>
            ))}
          </div>
          <div className="favorite-icon">
            <AiFillHeart className="fa-icon" />
          </div>
          <div className="category-name">
            <span>{}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
