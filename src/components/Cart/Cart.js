import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, course) => total + course.price, 0);

  return (
    <div className="">
      <div className="cart-header pl-3">
        <h3>Order Summary</h3>
        <h5>Course Added: {cart.length}</h5>
      </div>
      <hr />
      <div className="price-calculation">
        <p>Total Price: {totalPrice.toFixed(2)} </p>
      </div>
    </div>
  );
};

export default Cart;
