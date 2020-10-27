import React from "react";
import CartList from "../CartList/CartList";

const Cart = ({ cart }) => {
    let totalPrice = cart.reduce((total, course) => total + course.price, 0);

    return (
        <div className="ml-4">
            <h3>Course Added: {cart.length}</h3>
            {cart.map((cartItem) => (
                <CartList key={cartItem.id} cartItem={cartItem} />
            ))}

            <h4 className="border-top d-flex justify-content-between">
                Total: <span>{totalPrice.toFixed(2)}</span>
            </h4>
        </div>
    );
};

export default Cart;
