import React from "react";
import "./Breadcrumb.css";
export default function Breadcrumb({ bg, title }) {
  return (
    <div className="vh-100 vw-100 ">
      <div className="image">
        <img
          src={bg}
          alt=""
          className="d-block vw-100 vh-100 overflow-hidden  object-fit-cover"
        />
      </div>
      <div className="bradum d-flex justify-content-center align-items-center text-white ">
        <div className="row ">
          <div className="col-md-12">
            <h1 className="text-center ">{title}</h1>
            <ul className="breadcrumb">
              <li>
                <a className="text-white " href="index.php">
                  <i className="fa fa-home"></i> Home
                </a>
              </li>
              <li className="active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shodow"></div>
    </div>
  );
}
