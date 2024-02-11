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
    </main>
  );
}

export default Contact;
