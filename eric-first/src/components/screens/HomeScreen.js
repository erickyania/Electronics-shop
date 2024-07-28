import React,{useState,useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";
import axios from "axios";
import products from "./../Product";

function HomeScreen() {
    const [products,setProducts] = useState([])
    useEffect(() => {
    async function fetchProducts() {
        try {
            const { data } = await axios.get('http://127.0.0.1:8000/api/products/');
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }

    }

}, []);

  return (
    <div>
      <h1 className="text-center">Latest products in the market</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
