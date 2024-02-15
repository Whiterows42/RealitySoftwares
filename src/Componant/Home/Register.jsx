import React, { useState } from "react";
import "./Home.css";
import data from "./Accordian";
function Register() {
  const [selected, setSelected] = useState("1"); 

  const handleSelection = (id) => {
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  };
  return (
    <section>
      <div className="reg-area " style={{ padding: "120px 2px" }}>
        <div className="container">
          <div className="reg-itmes">
            <div className="row">
              <div className="col-md-6 px-md-5 text-center text-white  ">
                <div className="reg-itmes1 py-5 ">
                  <h3>Get a Free online Registration</h3>
                  <form className="row g-3 p-5">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control rounded-0  py-3"
                        id="inputEmail4"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="password"
                        placeholder="Last Name"
                        className="form-control rounded-0 py-3"
                        id="inputPassword4"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control rounded-0  py-3 "
                        id="inputAddress"
                        placeholder="Email*"
                      />
                    </div>
                    <select
                      className="form-select mx-2 rounded-0  py-3"
                      aria-label="Default select example"
                    >
                      <option >Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="col-12">
                      <input
                        type="tel"
                        maxLength={10}
                        className="form-control rounded-0  py-3"
                        id="inputAddress2"
                        placeholder="Phone"
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-warning px-4 rounded-0 py-2  fw-bold text-uppercase "
                      >
                        Rigister now
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-md-6 ">
                <div className="siteheadingtext">
                  <h2 className="fw-bold text-uppercase position-relative  ">
                    Frequently Asked Question
                  </h2>
                </div>
                <div className="accordion my-5">
                  {data.map((dataitem) => (
                    <div className="item" key={dataitem.id}>
                      <div
                        onClick={() => handleSelection(dataitem.id)}
                        className="title d-flex gap-2 justify-content-between align-items-center"
                        style={{ cursor: "pointer" }}
                      >
                        <h3 className="fw-bold fs-6">{dataitem.question}</h3>
                        <span className="fw-bold fs-3">
                          {selected === dataitem.id ? (
                            <i className="fa fa-angle-down"></i>
                          ) : (
                            <i className="fa fa-angle-right"></i>
                          )}
                        </span>
                      </div>
                      {selected === dataitem.id && (
                        <div>
                          <div className="databody py-2 fs-6">
                            <p>{dataitem.desc}</p>
                          </div>
                        </div>
                      )}
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
