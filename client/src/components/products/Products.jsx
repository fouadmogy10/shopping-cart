import React from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import "../../css/products/product.css";
import { words } from "../../words";
import Fade from 'react-reveal/Fade';
const Products = ({products,handelCartItems}) => {
  

  return (
    <>
        <Fade left cascade>
      <Row>

      
        {products
          ? products.map((item) => {
              return (
                <Col key={item.id} md="3" sm="6" className="mb-3">
                  <Card>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Title> <span className="text-success fw-bolder">$</span> {item.price}</Card.Title>
                      </div>

                      <Button onClick={()=>handelCartItems(item)} variant="outline-primary mx-2 my-2">
                        {words.addToCart}
                      </Button>

                      
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
            : null}
      </Row>
            </Fade>
      
    </>
  );
};

export default Products;
