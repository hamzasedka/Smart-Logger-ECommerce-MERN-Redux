import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../layouts/NavBar";
import {getProducts} from "../Redux/actions/productActions/product"
import Product from "./Product";
const Home = () => {
  const [content, setContent] = useState();
 const products =useSelector(state=>state.products)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
    
  },[products])

  return (
    <> < NavBar />
    <div className="container">
     
      <header >
        <Row xs={1} md={2} className="g-6">
  {products.map((product,index) => (
    <Col key={index}>
        <Product key={product._id} product={product} />
            </Col>
  ))}
</Row>
      </header>
    </div></>
  );
};
export default Home;