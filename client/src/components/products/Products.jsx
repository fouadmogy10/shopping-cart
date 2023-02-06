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
      <Row>
        {products
          ? products.map((item) => {
              return (
                <Col key={item.id} md="6" sm="12" className="mb-3">
                  <Card>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body >
                      <div className="d-flex justify-content-between">
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Title>{item.price}</Card.Title>
                      </div>
                     
                      <Button variant="outline-primary">{words.addToCart}</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          : null}
      </Row>
    </>
  );
};

export default Products;
