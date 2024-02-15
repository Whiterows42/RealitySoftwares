import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Courese.css";
function AllBackend({ heading, req, data }) {
  const [selected, setSelected] = useState("1");
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  };
  const test = () => {
    navigate("/");
  };
  return (
    <main style={{ padding: "80px 0" }} className="bg-light h-100 ">
      <div className="container  py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrapper bg-white p-5 rounded-5   ">
              <button className="btn-danger p-3 px-5 fw-bold " onClick={test}>
                Back
              </button>
              <h4 className="heading my-3  text-capitalize  ">
                {heading.title}
              </h4>
              <p>{heading.p1}</p>

              <p>{heading.p2}</p>
              <h6>Requirements</h6>
              <ul className="lists-3 p-0 py-2 fs-6   ">
                {req.computer}
                {req.textEditor}
                {req.webbrowser}
                {req.practice}
              </ul>
            </div>
            <div
              className="accordion my-5 border  py-3 px-5 bg-white  "
              id="accordionExample"
              style={{ borderRadius: "20px" }}
            >
              <h5 className="fw-bold ">Course Circullum</h5>
              {data?.map((item) => (
                <div
                  className="accordion-item my-4 border-black  "
                  key={item.id}
                >
                  <h2
                    className="accordion-header d-flex justify-content-between  align-items-center px-md-2    "
                    onClick={() => handleSelect(item.id)}
                    id="headingOne"
                    style={{ cursor: "pointer", fontSize: "10px" }}
                  >
                    <button
                      className="p-3  border-0  text-black text-capitalize bg-body  text-decoration-none"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span style={{ color: "black", fontWeight: "500" }}>
                        Topic: {item.id} {item.chapter}
                      </span>
                    </button>
                    <span className={`fs-6 icons mx-3`}>
                      {selected === item.id ? (
                        <i className="fa fa-minus"></i>
                      ) : (
                        <i className="fa fa-plus"></i>
                      )}
                    </span>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    {selected === item.id ? (
                      <div className="accordion-body">
                        {item.point.map((point, index) => (
                          <div
                            className=" d-flex justify-content-between p-3 align-items-center "
                            style={{
                              borderBottom: "1px solid gray",
                              fontSize: "10px",
                            }}
                            key={index}
                          >
                            <div className=" d-flex gap-4">
                              <div style={{ color: "gray" }}>
                                <i className="fa fa-play-circle-o fs-6 mx-2 "></i>
                                Point:{index < 9 ? `0${index + 1}` : index + 1}
                              </div>
                              <div
                                style={{
                                  fontWeight: "500",
                                  textAlign: "start",
                                }}
                              >
                                {" "}
                                {point}
                              </div>
                            </div>
                            <div>
                              {index !== item.point.length - 1 ? (
                                <div>
                                  <i className="fa fa-eye greeneye"></i>
                                </div>
                              ) : (
                                <div>
                                  <i className="fa fa-lock grayneye "></i>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AllBackend;
