import React from "react";
import fakeData from "../../fakeData/courses.js";
import { useState } from "react";
import Course from "../Course/Course.js";
import Cart from "../Cart/Cart.js";

const Courses = () => {
  const [courses, setCourses] = useState(fakeData);

  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="container-fluid d-flex">
      <div className=" border-right row  col-md-9 col-sm-9">
        {courses.map((course) => (
          <Course
            handleAddCourse={handleAddCourse}
            course={course}
            key={course.id}
          ></Course>
        ))}
      </div>
      <div className="cart-container col-md-3 col-sm-3 ">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Courses;
