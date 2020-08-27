import React from "react";
import "./Course.css";

const Course = (props) => {
  const { name, price, img } = props.course;
  return (
    <div className="col-md-4">
      <div className="single-course border">
        <img className="img-fluid border-bottom mb-3" src={img} alt="" />
        <div className="course-info p-3">
          <h5> {name} </h5>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            saepe quam harum, molestias odio dolore porro. Dolorem ut amet
            excepturi!
          </p>
          <h6 className="p-2"> ${price}</h6>
          <button
            className="btn btn-danger enroll-btn"
            onClick={() => props.handleAddCourse(props.course)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
