import React from 'react';

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
    <div classname={props.step1 ? 'active': ''} >Sign-In</div>
    <div classname={props.step2 ? 'active': ''} >Shipping</div>
    <div classname={props.step3 ? 'active': ''} >Payment</div>
    <div classname={props.step4 ? 'active': ''} >Place Order</div>
    </div>
  );
}
