import React from "react";

const PopularCourses = ({ thumb, heading, title, info, duration }) => {
  return (
    <div className="col-md-4 col-sm-6 px-2 my-3 ">
      <div className="Course-item d-flex justify-content-center align-items-center  flex-column  ">
        <div className="card" style={{ width: "100%" }}>
          <img src={thumb} className="card-img-top " alt="..." />
          <div className="card-body bg-light text-center ">
            <p
              className="card-text text-uppercase  "
              style={{ fontWeight: "600" }}
            >
              {heading}
            </p>
          </div>
        </div>
        <div className="course-info p-4 d-flex flex-column gap-3 text-center ">
          <h5 className="text-capitalize ">{title}</h5>
          <p>{info}</p>
          <hr />
          <div className="bottom">
            <ul className="text-capitalize d-flex justify-content-between  p-0 ">
              <li className="d-flex align-items-center gap-2 ">
                <i
                  class="fa fa-clock-o text-secondary"
                  style={{ fontSize: "26px" }}
                ></i>
                {duration} month approx
              </li>
              <li
                style={{ borderRadius: "10px", fontWeight: "600" }}
                className=" bg-warning text-uppercase p-2 rounded-pill whitehover"
              >
                enroll now
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
