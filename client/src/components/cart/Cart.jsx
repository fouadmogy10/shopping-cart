import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "../../css/checkout/checkout.css";
import Zoom from 'react-reveal/Zoom';
import Checkout from "../checkout/Checkout";

function Cart({ cartItem, handelRmove }) {
    const [showform, setshowform] = useState(false);
  const [value, setvalue] = useState("")

    const submitOrder=(e)=>{
      e.preventDefault();
      console.log(value);
      const order ={
        name:value.name,
        email:value.email
      }
    }
    const handelChange=(e)=>{
      setvalue((prevstate)=>setvalue({
        ...prevstate,[e.target.name]:e.target.value
      }))
    }
  return (
    <div className="cartWrapper">
      <div className="cartTitle my-4 fw-bolder text-primary mx-4 text-capitalize">
        {cartItem.length <= 0 ? (
          "empty cart"
        ) : (
          <h5>there is {cartItem.length} items in your cart</h5>
        )}
      </div>
      <div className="CartItems">
        <div className="cartItem row justify-content-center">
          {cartItem.length > 0
            ? cartItem.map((item) => {
                return (
                  <Col md="6" sm="12" key={item.id}>
                    <Zoom top>

                    <div className="card mb-3 ">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <img
                            className="  card-img "
                            src={item.image}
                            alt="Suresh Dasari Card"
                          />
                        </div>
                        <div className="col-9">
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">QTY : {item.qty}</p>
                            <p className="card-text">
                              price :{" "}
                              <span className="text-success fw-bolder">$</span>{" "}
                              {item.price}
                            </p>
                            <button
                              onClick={() => handelRmove(item)}
                              className="btn btn-outline-danger"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </Zoom>

                  </Col>
                );
              })
            : null}
    <Zoom left>

          {cartItem.length > 0 ?(
              <div className="total py-3">
                <h5 className="mx-4">Total : ${cartItem.reduce(
                    (acc,p) => {
                        return acc + p.price * p.qty },0)}</h5>
                    <button onClick={()=>setshowform(true)} className="btn btn-outline-success">select products</button>
              </div>
            ):( <h5 className="mx-4">Total : 0</h5>)}

            </Zoom>
            {/* checkout  */}
     {
        showform &&
        <Checkout
        
setshowform={setshowform}
submitOrder={submitOrder}
handelChange={handelChange}
        />
     }
        </div>
      </div>
    </div>
  );
}

export default Cart;
