import React from "react";
import { Col } from "react-bootstrap";
import "../../css/cart/cart.css"
function Cart({cartItem,handelRmove}) {
  return (
    <div className="cartWrapper">
      <div className="cartTitle my-4 fw-bolder text-primary mx-4 text-capitalize">{cartItem.length <= 0 ? ("empty cart"):(<h5>there is {cartItem.length} items in your cart</h5>)}</div>
      <div className="CartItems">
        <div className="cartItem row justify-content-center">
            {
                cartItem.length>0? cartItem.map(item=>{
                    return(
                        <Col md="6" sm="12">
        <div className="card mb-3 "  >
            <div className="row align-items-center">
                <div className="col-3">
                    <img className="  card-img "   src={item.image} alt="Suresh Dasari Card"/>
                </div>
                <div class="col-9">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">QTY : {item.qty}</p>
                        <p className="card-text">price : <span className="text-success fw-bolder">$</span> {item.price}</p>
                        <button onClick={()=>handelRmove(item)} className="btn btn-outline-danger">Remove</button>
                    </div>
                </div>
            </div>
        </div>
        </Col>
                    )
                }):(null)
            }
        
       
        
        </div>
      </div>
    </div>
  );
}

export default Cart;
