import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../Redux/actions/product";
import "./styles/productDetails.scss";
function ProductDetails() {
  const [productDetails, setProductDetails] = useState();
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productDetail = products.find((product) => product._id === params.id);
  return (
    <div className="containerProduct">
      {/*   https://www.jerecho.com/codepen/nike-product-page/ */}
      <motion.div
        animate={{
          x: 0,
        }}
        initial={{
          x: -1750,
        }}
        transition={{ delay: 0.2 }}
        className="product-image"
      >
        <img src={productDetail.prodcutImage} alt="" className="product-pic" />
      </motion.div>
      <motion.div
        animate={{
          x: 0,
        }}
        initial={{
          x: 1750,
        }}
        className="product-details"
      >
        <header>
          <h1 className="title">{productDetail.productTitle}</h1>
          <span className="colorCat">mint green</span>
          <div className="price">
            <span className="before">10 TND</span>
            <span className="current">{productDetail.productPrice}</span>
          </div>
          <div className="rate">
            <a href="#!" className="active">
              ★
            </a>
            <a href="#!" className="active">
              ★
            </a>
            <a href="#!" className="active">
              ★
            </a>
            <a href="#!">★</a>
            <a href="#!">★</a>
          </div>
        </header>
        <article>
          <h5>Description</h5>
          <p>{productDetail.productDisc}</p>
        </article>

        <div className="footerProduct">
          <motion.button
            animate={{
              y: 0,
            }}
            initial={{
              y: 1750,
            }}
            transition={{ delay: 0 }}
            type="button"
          >
            <img
              src="http://co0kie.github.io/codepen/nike-product-page/cart.png"
              alt=""
            />
            <span>add to cart</span>
          </motion.button>
          <a href="#!">
            <img
              src="http://co0kie.github.io/codepen/nike-product-page/share.png"
              alt=""
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductDetails;
