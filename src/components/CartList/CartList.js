import React from "react";

const CartList = ({ cartItem }) => {
    const { img, title, price } = cartItem;
    return (
        <div className="row">
            <img
                className="col-md-3"
                style={{ width: "30px", height: "30px" }}
                src={img}
                alt=""
            />
            <h6 className="col-md-6">{title}</h6>
            <p className="col-md-3">${price}</p>
        </div>
    );
};

export default CartList;
