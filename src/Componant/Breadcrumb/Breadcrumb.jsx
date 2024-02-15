import React, { useEffect } from "react";
import "./Breadcrumb.css";
import { Link, NavLink, useLocation } from "react-router-dom";
export default function Breadcrumb({ bg, title }) {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  console.log(pathSegments);

  return (
    <div className="w-100 position-relative  v-100 ">
      <div className="image">
        <img
          src={bg || "https://riyalitysoftwares.com/assets/img/banner/21.jpg"}
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
              <li className="active fw-bold text-decoration-none d-flex align-items-center gap-4  text-white-50">
                {pathSegments.map((name, index) => {
                  const isLast = index === pathSegments.length - 1;
                  const linkPath =
                    "/" + pathSegments.slice(0, index + 1).join("/");
                  return isLast ? (
                    <span key={name}>{name}</span>
                  ) : (
                    <span key={name}>
                      <Link
                        className="text-decoration-none text-white "
                        to={linkPath}
                      >
                        {name}
                      </Link>{" "}
                    </span>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shodow"></div>
    </div>
  );
}
