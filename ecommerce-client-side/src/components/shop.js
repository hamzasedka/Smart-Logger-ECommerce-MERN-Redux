import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../Redux/actions/category";
import { getProducts } from "../Redux/actions/product";
import FilterBar from "./filterBar";
import { motion, AnimatePresence } from "framer-motion";
import Product from "./Product";
import "./styles/shop.css";
import SearchModal from "./searchModal";
import SearchIcon from "@material-ui/icons/Search";

function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.category);
  const [filter, setfilter] = useState(products);
  const [activeCat, setActiveCat] = useState("");
  const [modelIsopen, setmodelIsopen] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [products]);
  const listItems = filter.map((item) => (
    <Col key={item._id}>
      <Product item={item}></Product>
    </Col>
  ));
  return (
    <>
      <div className="shop-container">
        <span>
          <button
            className=" search-button"
            onClick={() => setmodelIsopen(!modelIsopen)}
          >
            <SearchIcon />
          </button>
          <SearchModal
            isOpen={modelIsopen}
            setIsOpen={setmodelIsopen}
            data={products}
          />
        </span>
      </div>

      <motion.div layout className="products-Container">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={12}>
              <FilterBar
                products={products}
                setFilter={setfilter}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
                categories={categories}
              />
              <Row>
                <AnimatePresence>{listItems}</AnimatePresence>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
}

export default Shop;
