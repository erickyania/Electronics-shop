import React from "react";
import { Card } from "react-bootstrap";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

function Product({ product }) {
  // my means margin y-axis
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} Reviews
          </div>
        </Card.Text>
        <Card as="h3">Ksh{product.price}</Card>
        <Ratings
          value={product.rating}
          text={`${product.numReviews} reviews`}
          color={"#f8e823"}
        ></Ratings>
      </Card.Body>
    </Card>
  );
}

export default Product;
