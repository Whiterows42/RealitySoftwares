import React from "react";
import "./Breadcrumb.css";
import { Link, NavLink } from "react-router-dom";
export default function Breadcrumb({ bg, title }) {
  return (
    <div className="w-100 position-relative  v-100 ">
      <div className="image">
        <img
          src={bg}
          alt=""
          className="d-block w-100  img-fluid  object-fit-contain "
        />
      </div>
      <div className="bradum d-flex justify-content-center align-items-center text-white ">
        <div className="row ">
          <div className="col-md-12 d-flex flex-column ">
            <h1 className="text-center ">{title}</h1>
            <ul className="breadcrumb">
              <li>
                <Link
                  className="text-white  text-decoration-none fw-bold "
                  to={"/"}
                >
                  <i className="fa fa-home"></i> Home
                </Link>
              </li>
              <li className="active fw-bold text-decoration-none d-flex align-items-center text-white-50   ">
                {title}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shodow"></div>
    </div>
  );
}
