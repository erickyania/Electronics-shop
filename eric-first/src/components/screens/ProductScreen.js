import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from "react-bootstrap";
import products from "../../products";
import { useParams } from 'react-router-dom';
import Ratings from "../Ratings";

function ProductScreen() {
  const { _id } = useParams();
  const product = products.find((p) => p._id === _id); // Use 'id' directly from useParams()

  return (
    <div>
      <Link to="/" className="btn btn-dark my-3">Back</Link>
      <Row>
        <Col md={6}><Image src={product.image} alt={product.name} /></Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Ratings
              value={product.rating}
              text={`${product.numReviews}Reviews`}
              color={"f8e825"}
              >

              </Ratings>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: {product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col><strong>Ksh{product.price}</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  {product.countInStock > 0? "InStock":"OutOfStock"}
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" disabled={product.countInStock ===0} type={"button"}>Add to Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {product.name}
    </div>
  );
}

export default ProductScreen;
