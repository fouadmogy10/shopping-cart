import React from "react";
import Card from "react-bootstrap/Card";
import data from "../../data.json";
import { Col, Form } from "react-bootstrap";
function Filter({ size, handelFilterBySize, handelFilterByOrder, sort,length }) {
  return (
    <>
      <Col md="12" className="my-4">
        <Card>
          <Card.Header className="bg-primary text-white fw-bolder">
            Filter
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Number of Products is {length}
            </Card.Title>
            <label>size</label>
            <Form.Select
              value={size}
              onChange={handelFilterBySize}
              aria-label="Default select example"
              className="mb-4"
            >
              <option value="all">ALL</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="2xl">2X</option>
            </Form.Select>
            <label>Order</label>
            <Form.Select
              value={sort}
              onChange={handelFilterByOrder}
              aria-label="Default select example"
            >
              <option>Order</option>
              <option value="Latest">Latest</option>

              <option value="Lowest">Lowest</option>
              <option value="Highest">Highest</option>
            </Form.Select>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Filter;
