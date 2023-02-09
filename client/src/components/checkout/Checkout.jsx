import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Checkout({ setshowform, submitOrder, handelChange }) {
  return (
    <>
      <div className="checkout">
        <span onClick={() => setshowform(false)} className="close">
          &times;{" "}
        </span>
        <Form onSubmit={submitOrder} className="py-5">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>name</Form.Label>
            <Form.Control
              onChange={handelChange}
              name="name"
              type="text"
              placeholder="name"
            />
          </Form.Group>

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

          <Button variant="primary" type="submit">
            checkout
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Checkout;
