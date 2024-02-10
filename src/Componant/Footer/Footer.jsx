import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer position-relative   parallax vw-100 ">
      <div className="container py-5  d-flex z-index  ">
        <div className="row">
          <div className="col-md-4 d-flex flex-column gap-5   ">
            <div className="logoimge">
              <img
                src="https://riyalitysoftwares.com/assets/img/logo.png"
                alt="Logo"
              />
            </div>

            <div className="content">
              <p>
                Training and development services Sangola : Our services include
                software development,Full Stack Development Training , web
                Application development, Webiste development, and internship .
                We have a proven track record of delivering high-quality
                solutions to our clients on time and within budget
              </p>
              <p className="text_italic">
                Please write your email and get our amazing updates, news and
                support
              </p>
              <div className="suscribe">
                <form action="#">
                  <input type="email" placeholder="Enter your email here" />
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-2 col-sm-6 p-2  ">
            <div className="Aboutinfo   d-flex align-items-md-center     flex-column  ">
              <h4>Links</h4>
              <ul className="orangehover">
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="about-us.php">About US</a>
                </li>
                <li>
                  <a href="courses.php">Courses</a>
                </li>
                <li>
                  <a href="post.php">Post</a>
                </li>
                <li>
                  <a href="contact.php">Contact</a>
                </li>
                <li>
                  <a href="gallery.php">Gallary</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2 col-sm-6 p-2  ">
            <div className="Aboutinfo text-start   d-flex align-items-md-center  flex-column  ">
              <h4>SUPPORT</h4>

              <ul className="orangehover ">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
                <li>
                  <a href="#">Language Packs</a>
                </li>
                <li>
                  <a href="#">Release Status</a>
                </li>
                <li>
                  <a href="#">LearnPress</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 p-2">
            <div className="address Aboutinfo d-flex align-items-md-start flex-column ">
              <h4>ADDRESS</h4>
              <ul className="orangehover">
                <li>
                  <p>
                    Email
                    <span className="d-block ">
                      <a href="mailto:riyality.software@gmail.com">
                        riyality.software@gmail.com
                      </a>
                    </span>
                  </p>
                </li>

                <li>
                  <div>
                    OFFICE
                    <address>bhramhachaitany nagar,sangola</address>
                  </div>
                </li>
              </ul>
              <div className="openingtime">
                <h6>OPENING HOURS</h6>
                <ul>
                  <li className="d-flex justify-content-md-between justify-content-between  gap-5 flex-row">
                    <span> Mon - Sat : </span>
                    <div className="pull-right"> 8.00 am - 5.00 pm </div>
                  </li>
                  <li className="d-flex justify-content-md-between justify-content-between  gap-5 flex-row">
                    <span> Sun : </span>
                    <div className="pull-right closed"> Closed </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerbottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex flex-column align-items-center    flex-md-row al  ">
              <div className="col-md-3 ">
                <center>
                  <ul className="d-flex justify-content-md-between  ">
                    <li>
                      <a href="#">Terms of user</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </center>
              </div>

              <div className="col-md-6">
                <center>
                  <p>
                    © Copyright 2023. All Rights Reserved by{" "}
                    <a className="text-warning " href="#">
                      Riyality
                    </a>
                  </p>
                </center>
              </div>
              <div className="col-md-3">
                <center>
                  {" "}
                  <h4>
                    <div class="col-md-3">
                      <center>
                        {" "}
                        <h4 className="d-flex gap-2 ">
                          page view
                          <a
                            href="https://www.cutercounter.com/"
                            target="_blank"
                          >
                            <img
                              src="https://www.cutercounter.com/hits.php?id=hmuxnfxdq&amp;nd=5&amp;style=10"
                              border="0"
                              alt="best free website hit counter"
                            />
                          </a>
                        </h4>
                      </center>
                    </div>
                  </h4>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parallaShadow"></div>
    </footer>
  );
}

export default Footer;
