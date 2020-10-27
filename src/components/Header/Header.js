import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img className="img-fluid" src={logo} alt="" />
            <nav>
                <a href="home">Home</a>
                <a href="courses">Courses</a>
                <a href="wishlist">Whish List</a>
            </nav>
        </div>
    );
};

export default Header;
