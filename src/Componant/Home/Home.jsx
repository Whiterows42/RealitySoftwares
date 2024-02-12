import React from "react";
import "./Video.css";
import "./AnimationText.css";
import "./Home.css";
import "./funparallax.css";
import Features from "./Features";
import Courses from "../../Courses/Courses";
function Home() {
  return (
    <>
      <header className="position-relative w-100  border-2 border-warning    ">
        <div
          id="carouselExampleFade "
          className="carousel slide  carousel-fade vw-90  "
          data-bs-ride="carousel"
          // data-bs-touch="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active " data-bs-interval="3000">
              <img
                src="https://riyalitysoftwares.com/admin/uploads/galleryimages/ofc1.jpg"
                className="img-fluid kenburns-top"
                alt="..."
                style={{ objectFit: "cover", height: "100vh", width: "100%" }}
              />

              <div className="textcaption ">
                <div className="content1">
                  <h5 className="slide-in-top">
                    Learn From Best{" "}
                    <span className="text-warning "> Offline Training </span>{" "}
                    Courses In Sangola
                  </h5>
                  <h5 className="slide-in-top">
                    Call For More Details <br />
                    <span className="text-warning ">+91 9359 971 953</span>
                  </h5>
                  <div className="btn gap-2 slide-in-bottom d-flex flex-md-row ">
                    <button className="   border-white  bg-transparent ">
                      learn more
                    </button>
                    <button className="   bg-warning ">View Courses</button>
                  </div>
                </div>
                <div className="shadow1"></div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://riyalitysoftwares.com/admin/uploads/galleryimages/ofc3.jpg"
                className="img-fluid kenburns-top"
                alt="..."
                style={{ objectFit: "cover", height: "100vh", width: "100%" }}
              />
              <div className="textcaption ">
                <div className="content1">
                  <h5 className="slide-in-top">
                    We Provide <span className="text-warning ">Internship</span>
                    And{" "}
                    <span className="text-warning ">
                      Internship Certificate
                    </span>
                    To Student
                  </h5>
                  <p className="slide-in-bottom">
                    Discover our brilliant students who shine with their
                    exceptional intellect, passion, and achievements, making us
                    proud with their dedication and contributions to various
                    fields of knowledge and innovation.
                  </p>
                </div>
                <div className="shadow1"></div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="https://riyalitysoftwares.com/admin/uploads/galleryimages/ofc5.jpg "
                className="img-fluid kenburns-top"
                alt="..."
                style={{ objectFit: "cover", height: "100vh", width: "100%" }}
              />
              <div className="textcaption ">
                <div className="content1">
                  <h5 className="slide-in-top">
                    We Provide{" "}
                    <span className="text-warning ">
                      Experience And Course Completion Certificate
                    </span>{" "}
                    To Students
                  </h5>
                  <p className="slide-in-bottom">
                    Join the best community where diverse minds unite, fostering
                    collaboration, growth, and support. Experience a vibrant
                    network of individuals driven by shared values, inspiring
                    you to reach new heights and create lasting connections.
                  </p>
                </div>
                <div className="shadow1"></div>
              </div>
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

        {/* <div className="shadow1"></div> */}
        {/* <Black /> */}
      </header>

      <main>
        <section>
          <div className=" w-100 d-flex justify-content-center   h-100  ">
            <div className=" row   video">
              <div className="col-md-6  ">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/xFlcEsCp8zA?autoplay=1&amp;mute=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                ></iframe>
              </div>
              <div className="col-md-6 d-flex flex-column gap-2 info py-5  ">
                <h5>THIS IS ALL ABOUT RIYALITY...!</h5>
                <h2>Preparing For Your Success Provide Best IT Solutions.</h2>
                <p>
                  Empowering Careers and Building Innovative Solutions: Unleash
                  Your Potential with Riyality Software Services
                </p>
                <p>
                  Welcome to Riyality, where we specialize in providing
                  top-notch training and comprehensive placement assistance. Our
                  team is dedicated to equipping individuals with the skills and
                  knowledge they need to succeed in their careers.we offer the
                  best training programs tailored to meet the demands of today's
                  competitive job market.
                </p>
                <a
                  href="#"
                  className="btn btn-outline-dark border rounded-0 w-25  btn-md"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="Feautures  w-100   text-center  text-white  bgnavy">
            <h1>We Provide</h1>
            <div className="container">
              <div className="row my-5 ">
                <Features
                  icon="https://cdn-icons-png.flaticon.com/512/79/79831.png"
                  title="Training &amp; Development"
                />
                <Features
                  icon="https://cdn-icons-png.flaticon.com/128/14600/14600724.png"
                  title="internship"
                />
                <Features
                  title="Job Assistance"
                  icon="https://cdn-icons-png.flaticon.com/512/1436/1436664.png"
                />
              </div>
            </div>
          </div>
        </section>

        <article>
          <Courses />
        </article>

        <section>
          <div className="fun factor funparallax w-100 vh-100 my-5 position-relative  ">
            <div className="container z-1 text-white ">
              <div className="row text-center ">
                <div className="col-md-3 col-sm-6 ">
                  <div className="funfact border ">
                    <div className="icon"></div>
                    <div className="info">ssfdfas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadowblue"></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
