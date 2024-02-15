import React from "react";
import Breadcrumb from "../Componant/Breadcrumb/Breadcrumb";
import Courses from "./Courses";

function CourseManin() {
  return (
    <>
      <header>
        <Breadcrumb
          bg="https://riyalitysoftwares.com/assets/img/banner/21.jpg"
          title="courses us"
        />
        <main>
          <Courses />
        </main>
      </header>
    </>
  );
}

export default CourseManin;
