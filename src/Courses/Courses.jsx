import React from "react";
import PopularCourses from "./PopularCourses";
import Breadcrumb from "../Componant/Breadcrumb/Breadcrumb";

function Courses() {
  return (
    <>
      <section>
        <article>
          <div className="container my-5 py-5 px-2 ">
            <div className="row d-flex flex-column align-items-center">
              <div className="col-md-8 col-md-offset-2">
                <div className="d-flex flex-column align-items-center  ">
                  <h1 className="font-weight-bold">Our Courses</h1>
                  <p className="my-5">
                    Riyality Software Services Sangola: Offline learning
                    provides a focused and distraction-free environment,
                    allowing deep engagement with materials. It fosters
                    independent thinking, encourages critical analysis, and
                    cultivates personal connections through face-to-face
                    interactions, promoting holistic learning experiences.
                    Software training Sangola.
                  </p>
                </div>
              </div>
            </div>

            <div className="row px-2  my-5 h-100  ">
              <PopularCourses
                thumb="https://riyalitysoftwares.com/assets/img/courses/frontend.jpg"
                heading=" FRONT END DEVELOPMENT"
                title="Front End Technologies"
                info="We Cover all Front End Syllabus From Basic to Advance. In this
              Course we Complete HTML, HTML5, CSS, CSS3, Javascript, Jquery,
              React Js, bootstrap And Template Modification"
                duration="2-3"
              />
              <PopularCourses
                thumb="https://riyalitysoftwares.com/assets/img/courses/backend.jpg"
                heading="THE COMPLETE JAVA"
                title="Back End Development"
                info="In this Course We cover The Complete Java. That Means all Core to Advance Java. in this course we teach Core, Advance Java, Servlet, JDBC, Spring And SpringBoot Framework, Hibernate, JPA etc"
                duration="2-3"
              />
              <PopularCourses
                thumb="https://riyalitysoftwares.com/assets/img/courses/fullstack.jpg"
                heading="FULL STACK DEVELOPMENT"
                title="Full Stack Development"
                info="In this Course We cover all Front and Back End development. In this Course You will create your own Web application as Project. In thise we introduce you to all industrial tools like JIRA, Git, Bit Bucket etc."
                duration="5-6"
              />
            </div>
            <div className="cal-md-12 text-center ">
              <a
                className="btn btn-dark fw-bold px-3  rounded-pill transparentWhite text-uppercase "
                href="#"
              >
                Browse All Courses
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Courses;
