import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

function Contact() {
  const style = {
    bg: "https://riyalitysoftwares.com/assets/img/banner/8.jpg",
    title: "Contact",
  };
  return (
    <main>
      <Breadcrumb bg={style.bg} title={style.title} />

      <div className="d-flex justify-content-center align-items-center h-100   ">
        <img
          className="my-5"
          src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-website-page-under-construction-vector-illustration-concept-png-image_4888926.jpg"
          alt=""
        />
      </div>
    </main>
  );
}

export default Contact;
