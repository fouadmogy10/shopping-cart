import React from 'react'
import Card from "react-bootstrap/Card";
import data from "../../data.json";
import { Col, Container, Form, Row } from "react-bootstrap";
function Filter() {
  return (
    <>
       <Col md="12" className="mb-4">
              <Card>
                <Card.Header className="bg-primary text-white fw-bolder">
                  Filter
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    Number of Products is {data.products.length}
                  </Card.Title>
                  <label>Filter</label>
                  <Form.Select aria-label="Default select example" className="mb-4">
                    <option>size</option>
                    <option value="">ALL</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="2x">2X</option>
                  </Form.Select>
                  <label>Order</label>
                  <Form.Select aria-label="Default select example">
                    <option>Order</option>
                    <option value="lastest">Latest</option>
                    <option value="lower">Lower</option>
                    <option value="highest">Highest</option>
                    
                  </Form.Select>
                </Card.Body>
              </Card>
            </Col>
    </>
  )
}

export default Filter
