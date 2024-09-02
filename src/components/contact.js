import "../css/contact.css";

import React, { useState, useEffect } from "react";

function Contact() {
  const [contactHeight, setContactHeight] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const contactX = document
        .querySelector(".contact")
        .getBoundingClientRect();
      let Scroll = window.scrollY;
      setContactHeight(Scroll > contactX.height ? true : false);
    });
  }, []);

  return (
    <div className="contact" id="Contact">
      <div className="contact__fixed z-0">
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
      </div>
    </div>
  );
}

export default Contact;
