import React from "react";
import "./Home.css";
export default function Features({ icon, title }) {
  return (
    <div className="col-md-4 my-2 ">
      <div className="about2 d-flex justify-content-center flex-column  flex-md-row   align-items-center gap-4  ">
        <div className="icon">
          <img src={icon} width={80} alt="" />
        </div>
        <div className="info">
          <h4>{title}</h4>
          <a className="text-Secondary border-0 " href="#">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
