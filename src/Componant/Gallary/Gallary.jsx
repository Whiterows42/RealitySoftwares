import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default function Gallary() {
  const style = {
    bg: "https://riyalitysoftwares.com/assets/img/banner/12.jpg",
    title: "Gallary",
  };
  return (
    <main>
      <Breadcrumb bg={style.bg} title={style.title} />
      <div className="d-flex justify-content-center align-items-center h-100   ">
        <img
          className="my-5 img-fluid "
          src="https://png.pngtree.com/png-clipart/20190925/original/pngtree-website-page-under-construction-vector-illustration-concept-png-image_4888926.jpg"
          alt=""
        />
      </div>
    </main>
  );
}
