import React, { useEffect, useState } from "react";

import "./styles/product.css";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Top3Products from "./top3Products";
import { SliderData } from "./sliderData";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/actions/product";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [topProducts, settopProducts] = useState(products);

  useEffect(() => {
    dispatch(getProducts());
    const filter = products.filter((product) => product.productRating >= 3);
    settopProducts(filter.slice(0, 3));
  }, [products]);

  return (
    <>
      <div className="welcome-section">
        <Link
          style={{ textDecoration: "none" }}
          className="welcome-button"
          to="/shop"
        >
          Shop Now
        </Link>
      </div>
      <section className="description-section">
        <p>
          With emerging IoT technologies collecting terabytes of personal data
          the question is, are we ready to unbutton our online dress shirt while
          many are still just loosening their collars?”
        </p>
      </section>
      <section className="top-3-products">
        <div style={{ width: "100%", textAlign: "center", margin: "20px" }}>
          <h4 style={{ fontWeight: "bold" }}>Must Haves</h4>
          <h5>Some of our favourite picks this week.</h5>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <Row style={{ justifyContent: "space-evenly" }}>
              {topProducts.map((product, index) => (
                <Top3Products key={index} product={product} />
              ))}
            </Row>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>
      <section className="about-us-section">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 about-us">
            <div
              className="info-company"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div className="about-us-detail">
                <div className="about-us-detail-content">
                  <h3>SmartLogger</h3>
                  <p>
                    SMART LOGGER est une startup nouvellement dévoilée par une
                    équipe d'ingénieurs Tunisiens. Grâce à son staff
                    multidisciplinaire et à ses rapports étroits avec ses
                    partenaires, elle fournit des solutions de gestion
                    innovantes au service de l’agriculture, et l'industrie .
                  </p>
                </div>
              </div>
              <img
                className="about-us-img"
                alt=""
                src="https://images.unsplash.com/photo-1598897516650-e4dc73d8e417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              />
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>
      <section className="pub-section"></section>
      <section className="discount-section"></section>
    </>
  );
};
export default Home;
