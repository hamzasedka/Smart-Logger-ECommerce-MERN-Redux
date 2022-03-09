import React from "react";
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <Card style={{ height: "400px", width: "250px" }}>
      <Card.Img
        style={{ height: "auto", width: "100%" }}
        variant="top"
        src={product.prodcutImage}
      />
      <Card.Body>
        <Card.Title>{product.productTitle}</Card.Title>
        <Card.Text>{product.productPrice} TND</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
