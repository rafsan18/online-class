import React, { useState } from "react";
import Cart from "../Cart/Cart";
import fakeData from "../../fakeData/courses";
import Course from "../Course/Course";

const Shop = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) => {
        let newCart = [...cart];
        if (newCart.includes(course)) {
            alert("Course already added in the cart");
        } else {
            newCart.push(course);
        }
        setCart(newCart);
    };
    return (
        <div className="row container-fluid">
            <div className="col-md-9 col-sm-8 col-8">
                <div className="row">
                    {courses.map((course) => (
                        <Course
                            key={course.id}
                            course={course}
                            handleAddCourse={handleAddCourse}
                        />
                    ))}
                </div>
            </div>
            <div className="col-md-3 col-sm-4 col-4">
                <div className="border-left" style={{ height: "100vh" }}>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
