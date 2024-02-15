import React, { useState } from "react";
import "./About.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
function About() {
  const [bg, setbg] = useState(
    "https://riyalitysoftwares.com/admin/uploads/galleryimages/Activity2.jpg"
  );
  const [title, settitle] = useState("About us");

  return (
    <div>
      <Breadcrumb bg={bg} title={title} />

      <div className="d-flex justify-content-center align-items-center h-100   ">
        <img
          className="my-5 img-fluid "
          src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-website-page-under-construction-vector-illustration-concept-png-image_4888926.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
