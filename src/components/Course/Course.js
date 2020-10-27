import React from "react";

const Course = ({ course, handleAddCourse }) => {
    const { img, title, name, info, price } = course;

    return (
        <div className="col-md-4 mb-3">
            <div className="card " style={{ height: "100%" }}>
                <img
                    src={img}
                    style={{ height: "200px" }}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{info}</p>
                        <small>
                            By: <strong>{name}</strong>
                        </small>
                        <h6>${price}</h6>
                    </div>
                    <button
                        onClick={() => handleAddCourse(course)}
                        className="btn btn-danger"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;
