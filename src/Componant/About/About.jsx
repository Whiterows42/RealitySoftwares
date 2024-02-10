import React, { useState } from "react";
import "./About.css";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
function About() {
    const [bg, setbg] = useState(
      "https://riyalitysoftwares.com/admin/uploads/galleryimages/Activity2.jpg"
    );
    const [title, settitle] = useState("About us")
    
  return (
    <div>
        <Breadcrumb bg={bg} title={title} />
    </div>
  );
}

export default About;
