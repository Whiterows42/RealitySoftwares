import React from "react";
import Footer from "../Footer/Footer";
import Black from "./Black";

import "./AnimationText.css";
import "./Home.css";
function Home() {
  return (
    // <>
    <header className="position-relative vw-100 ">
      <div
        id="carouselExampleFade "
        className="carousel slide overflow-hidden  carousel-fade vw-90  z-1  "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="3000">
            <img
              src="https://riyalitysoftwares.com/admin/uploads/galleryimages/ofc1.jpg"
              className="d-block vw-100 vh-100 overflow-hidden  object-fit-cover kenburns-top "
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://riyalitysoftwares.com/admin/uploads/galleryimages/ofc3.jpg"
              className="d-block vw-100 vh-100 overflow-hidden  object-fit-cover kenburns-top"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src="https://riyalitysoftwares.com/admin/uploads/galleryimages/ofc5.jpg "
              className="d-block vw-100 vh-100 overflow-hidden  object-fit-cover kenburns-top "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="shadow1"></div>
      {/* <Black /> */}
    </header>
    // </>
  );
}

export default Home;
