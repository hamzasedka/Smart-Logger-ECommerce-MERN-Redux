import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./addForm.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Redux/actions/categoryActions/category";
import {
  AddProducts,
  getProducts,
} from "../../../Redux/actions/productActions/product";
function AddProduct() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);

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
      console.log(e.target);
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
      dispatch(AddProducts(prevState));
      dispatch(getProducts());
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
            value="hamza"
            color="primary"
            label="Product Title"
            onChange={TitleOnChangeHandler}
          />

          <TextField
            style={{ marginTop: "10px" }}
            fullWidth
            id="Price"
            required
            variant="outlined"
            color="primary"
            label="Product Price TND"
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
            label="Product Stock"
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
            label="Product Image Url"
            onChange={ImageOnChangeHandler}
          />

          <select
            className="browser-default custom-select"
            onChange={StatusOnChangeHandler}
            style={{ marginTop: "10px", height: "56px" }}
          >
            <option disabled>Select Status</option>
            <option value="true">Active</option>
            <option value="false">Disactive</option>
          </select>
          <TextField
            style={{ marginTop: "10px" }}
            fullWidth
            id="Rating"
            required
            variant="outlined"
            color="primary"
            label="Product Rating"
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
            <option key={category._id} value={category._id}>
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
            placeholder="Description"
            rows="5"
            onChange={DiscOnChangeHandler}
          />
        </div>
        <Button
          color="primary"
          variant="outlined"
          type="submit"
          style={{ margin: "15px" }}
          onClick={SubmitProduct}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default AddProduct;
