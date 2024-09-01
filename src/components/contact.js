import "../css/contact.css";

import React, { useState, useEffect } from "react";

function Contact() {
  const [height, setHeight] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setHeight(true);
      } else {
        setHeight(false);
      }
    });
  }, [1]);

  return (
    <div className="contact" id="Contact">
      <div className="container  contact-body">
        <div className="w-100">
          <div class="row ">
            <div class="col ">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div class="col  pe-0">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"></input>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"></textarea>
          </div>
        </div>
        <button type="button" class="btn btn-outline-secondary mt-3 ">
          Wyślij
        </button>
      </div>
      <div
        className="container-fluid"
        style={height ? { display: "block" } : { display: "none" }}></div>
    </div>
  );
}

export default Contact;
