import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Fade,Roll} from 'react-reveal';
function Checkout({ setshowform, submitOrder, handelChange }) {
  return (
    <>
    <Fade right>

    
      <div className="checkout">
        <span onClick={() => setshowform(false)} className="close">
          &times;{" "}
        </span>
        <Form onSubmit={submitOrder} className="py-5">
        <Fade right>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>name</Form.Label>
            <Form.Control
              onChange={handelChange}
              name="name"
              type="text"
              placeholder="name"
              />
          </Form.Group>
              </Fade>
              <Fade right>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handelChange}
              name="email"
              type="email"
              placeholder="Enter email"
              />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
              </Fade>
            <Fade>

          <Button variant="primary" type="submit">
            checkout
          </Button>
            </Fade>
        </Form>
      </div></Fade>
    </>
  );
}

export default Checkout;
