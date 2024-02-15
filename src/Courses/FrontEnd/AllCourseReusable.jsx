import React, { useState } from "react";
import "./course.css";
import { Link, useNavigate } from "react-router-dom";
function All({ requirment, p, data }) {
  const [select, setSelect] = useState("1");
  const navigate = useNavigate();
  const handlSelection = (id) => {
    setSelect((prevSelected) => (prevSelected === id ? null : id));
  };
  const test = () => {
    navigate("/");
  };
  return (
    <main style={{ padding: "80px 0" }} className="bg-light h-100 ">
      <div className="container   ">
        <div className="row">
          <div className="col-md-12 ">
            <div className="title-wrapper bg-white p-5 rounded-5   ">
              <button className="btn-danger p-3 px-5 fw-bold " onClick={test}>
                Back
              </button>
              <h4 className="heading my-3  text-capitalize  ">{p?.title}</h4>
              <p>{p?.p1}</p>

              <p>{p?.p2}</p>
              <h6>Requirements</h6>
              <ul className="lists-3 p-0 py-2  ">
                <li>
                  <strong>Computer:</strong> {requirment?.computer}
                </li>
                <li>
                  <strong>Text Editor::</strong> {requirment?.textEditor}
                </li>
                <li>
                  <strong>Web Browser::</strong>
                  {requirment?.webbrowser}
                </li>
                <li>
                  <strong>Patience and Practice:</strong>
                  {requirment?.practice}
                </li>
              </ul>
            </div>
            <div className="details-wrapper   my-5 bg-white p-5 rounded-5  ">
              <h3>Course Circullum</h3>

              <div className="my-3">
                {data?.map((item, index) => (
                  <div
                    className="my-2 fs-5 poinstdiv"
                    key={item.id}
                    style={{ fontSize: "10px" }}
                  >
                    <div
                      onClick={() => handlSelection(item.id)}
                      className="py-3 px-4 pointbox"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="d-flex justify-content-between">
                        <h6 className="text-capitalize ">
                          Part 0{item.id}: {item.chapter}
                        </h6>
                        <span className={`fs-6 icons`}>
                          {select === item.id ? (
                            <i className="fa fa-minus"></i>
                          ) : (
                            <i className="fa fa-plus"></i>
                          )}
                        </span>
                      </div>
                      {select === item.id && (
                        <div
                          className={`d-flex flex-column gap-3 py-3 ${
                            select === item.id ? "poinstdiv" : ""
                          }`}
                        >
                          {select === item.id &&
                            item.point?.map((point, index) => (
                              <div
                                className="d-flex  justify-content-between border-bottom m-0  border-1 border-secondary align-items-center"
                                key={index}
                                style={{ fontSize: "10px" }}
                              >
                                <div className="d-flex gap-4 justify-content-between align-items-center ">
                                  <span
                                    className=""
                                    style={{
                                      marginBottom: "15px",
                                      color: "gray",
                                    }}
                                  >
                                    <i className="fa fa-play-circle-o fs-6 mx-2 "></i>

                                    <span>
                                      Point:
                                      {index < 9 ? `0${index + 1}` : index + 1}
                                    </span>
                                  </span>
                                  <p
                                    className=" text-capitalize "
                                    style={{ fontWeight: "500" }}
                                  >
                                    {point}
                                  </p>
                                </div>
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
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default All;
