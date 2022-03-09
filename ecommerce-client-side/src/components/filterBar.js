import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import "./styles/filterBar.css";
function FilterBar({
  products,
  setFilter,
  activeCat,
  setActiveCat,
  categories,
}) {
  useEffect(() => {
    if (activeCat === "") {
      setFilter(products);
      return;
    }
    const filtred = products.filter(
      (product) => product.productCategory.valueOf() === activeCat
    );
    setFilter(filtred);
  }, [activeCat]);

  return (
    <div className="filter-container">
      <div className="category-container">
        <button
          className={activeCat === "" ? "filterButton active" : "filterButton"}
          onClick={() => setActiveCat("")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            className={
              activeCat === cat._id ? "filterButton active" : "filterButton"
            }
            onClick={() => setActiveCat(cat._id)}
          >
            {cat.CategoryName}
          </button>
        ))}
      </div>
      {/*<div className="select-filter">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select" style={{ border: "1px solid black" }}>
            <option disabled>Filter By</option>
            <option>Low Price</option>
            <option>High Price</option>
            <option>Rate</option>
          </Form.Control>
        </Form.Group>
  </div>*/}
    </div>
  );
}

export default FilterBar;
