import React, { useEffect, useState } from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import "../../css/products/product.css";
import { words } from "../../words";
import data from "../../data.json";
const Products = () => {
  const [products, setproducts] = useState(null); 
  useEffect(() => {
    setproducts(data.products);
  }, []);

  return (
    <>
      
        {products
          ? products.map((item) => {
              return (
                <Col key={item.id} md="4" sm="6" className="mb-3">
                  <Card>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Title> <span className="text-success fw-bolder">$</span> {item.price}</Card.Title>
                      </div>

                      <Button variant="outline-primary mx-2 my-2">
                        {words.addToCart}
                      </Button>

                      
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          : null}
      
      
    </>
  );
};

export default Products;
