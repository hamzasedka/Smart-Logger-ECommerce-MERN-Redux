import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/Home";
import Shop from "./components/shop";

import ProductDetails from "./components/productDetails";
import SearchModal from "./components/searchModal";

function App() {
  return (
    <div className="containerBody">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/productDetails/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
