import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./addForm.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Redux/actions/categoryActions/category";
import {
  AddProducts,
  getProducts,
  UpdateProduct,
} from "../../../Redux/actions/productActions/product";
function AddProduct({ productDetail }) {
  const [prevState, setProductInput] = useState({
    productTitle: "",
    productImage: "",
    productPrice: 0,
    productCategory: "",
    productDisc: "",
    productStatus: false,
    productStock: 0,
    productRating: 0,
  });
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
    let active = document.getElementById("active");
    let disactive = document.getElementById("disactive");

    /*let categoryOption = document.getElementById(productDetail.productCategory);
    console.log(categoryOption);*/

    if (productDetail.productStatus == true) {
      active.setAttribute("selected", "true");
    } else {
      disactive.setAttribute("selected", "true");
    }
    if (productDetail) {
      setProductInput({
        productTitle: productDetail.productTitle,
        productImage: productDetail.prodcutImage,
        productPrice: productDetail.productPrice,
        productCategory: productDetail.productCategory,
        productDisc: productDetail.productDisc,
        productStatus: productDetail.productStatus,
        productStock: productDetail.productStock,
        productRating: productDetail.productRating,
      });
    }
  }, []);

  const TitleOnChangeHandler = (e) => {
    setProductInput(() => {
      return {
        ...prevState,
        productTitle: e.target.value,
      };
    });
  };
  const ImageOnChangeHandler = (e) => {
    setProductInput(() => {
      return {
        ...prevState,
        productImage: e.target.value,
      };
    });
  };
  const CategoryOnChangeHandler = (e) => {
    setProductInput(() => {
      return {
        ...prevState,
        productCategory: e.target.value,
      };
    });
  };
  const DiscOnChangeHandler = (e) => {
    setProductInput(() => {
      return {
        ...prevState,
        productDisc: e.target.value,
      };
    });
  };
  const StatusOnChangeHandler = (e) => {
    setProductInput(() => {
      return {
        ...prevState,
        productStatus: e.target.value,
      };
    });
  };
  const RatingOnChangeHandler = (e) => {
    setProductInput(() => {
      return {
        ...prevState,
        productRating: e.target.value,
      };
    });
  };
  const StockOnChangeHandler = (e) => {
    setProductInput(() => {
      return {
        ...prevState,
        productStock: e.target.value,
      };
    });
  };
  const PriceOnChangeHandler = (e) => {
    setProductInput(() => {
      return {
        ...prevState,
        productPrice: e.target.value,
      };
    });
  };

  const SubmitProduct = () => {
    let confirmAction = window.confirm("Are you sure to execute this action?");
    if (confirmAction) {
      if (productDetail._id) {
        dispatch(UpdateProduct(productDetail._id, prevState));
        dispatch(getProducts());
      } else {
        dispatch(AddProducts(prevState));
        dispatch(getProducts());
      }
    }
  };
  return (
    <form className="FormContainer">
      <div className="row" style={{ padding: "20px" }}>
        <div className="col-md-6">
          <TextField
            fullWidth
            id="Title"
            required
            variant="outlined"
            color="primary"
            value={productDetail ? prevState.productTitle : ""}
            label={productDetail.productTitle ? "" : "Product Title"}
            onChange={TitleOnChangeHandler}
          />

          <TextField
            style={{ marginTop: "10px" }}
            fullWidth
            id="Price"
            required
            variant="outlined"
            color="primary"
            value={productDetail ? prevState.productPrice : ""}
            label={productDetail.productPrice ? "" : "Product Price TND"}
            type="number"
            inputProps={{ step: "0.1" }}
            onChange={PriceOnChangeHandler}
          />

          <TextField
            style={{ marginTop: "10px" }}
            fullWidth
            id="Stock"
            required
            variant="outlined"
            color="primary"
            value={productDetail ? prevState.productStock : ""}
            label={productDetail.productStock ? "" : "Product Stock"}
            type="number"
            inputProps={{ step: "0.1" }}
            onChange={StockOnChangeHandler}
          />
        </div>
        <div className="col-md-6">
          <TextField
            fullWidth
            id="email"
            required
            variant="outlined"
            color="primary"
            value={productDetail ? prevState.productImage : ""}
            label={productDetail.prodcutImage ? "" : "Product Image Url"}
            onChange={ImageOnChangeHandler}
          />

          <select
            className="browser-default custom-select"
            onChange={StatusOnChangeHandler}
            style={{ marginTop: "10px", height: "56px" }}
          >
            <option disabled>Select Status</option>
            <option id="active" value="true">
              Active
            </option>
            <option id="disactive" value="false">
              Disactive
            </option>
          </select>
          <TextField
            style={{ marginTop: "10px" }}
            fullWidth
            id="Rating"
            required
            variant="outlined"
            color="primary"
            value={productDetail ? prevState.productRating : ""}
            label={productDetail.productRating ? "" : "Product Rating"}
            type="number"
            inputProps={{ step: "0.1" }}
            onChange={RatingOnChangeHandler}
          />
        </div>
        <select
          required
          className="browser-default custom-select"
          onChange={CategoryOnChangeHandler}
          style={{ marginTop: "10px" }}
        >
          <option disabled>Choose Category</option>

          {categories.map((category) => (
            <option id={category._id} key={category._id} value={category._id}>
              {category.CategoryName}
            </option>
          ))}
        </select>
        <div
          className="form-group"
          style={{ width: "100%", marginTop: "10px", border: "none" }}
        >
          <textarea
            style={{ width: "100%", background: "transparent" }}
            className="form-control"
            id="exampleFormControlTextarea1"
            value={productDetail ? prevState.productDisc : ""}
            label={productDetail.productDisc ? "" : "Product Description"}
            rows="5"
            onChange={DiscOnChangeHandler}
          />
        </div>
        <Button
          color="primary"
          variant="outlined"
          style={{ margin: "15px" }}
          type="submit"
          onClick={SubmitProduct}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default AddProduct;
