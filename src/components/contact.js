import "../css/contact.css";

import React from "react";

function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="contact__fixed z-0">
        <div className="contact__title">
          <p className="display-2 mt-5">Masz jakieś pytanie? zadaj je </p>
        </div>
        <div className="container  contact-body">
          <div className="w-100">
            <div className="row ">
              <div className="col-5">
                <label htmlFor="FirstNameInput">Imię</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  aria-label="First name"
                  id="FirstNameInput"
                />
              </div>
              <div className="col-5  ps-0 ms-auto">
                <label htmlFor="LastNameInput">Nazwisko</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  aria-label="Last name"
                  id="LastNameInput"
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-5">
                <label htmlFor="exampleFormControlInput1" className="mt-3 mb-2">
                  Adres Email
                </label>
                <input
                  type="email"
                  className="col-12"
                  id="exampleFormControlInput1"></input>
              </div>
              <div className="mb-3 col-5 ms-auto ps-0">
                <label htmlFor="exampleFormControlInput1" className="mt-3 mb-2">
                  Telefon
                </label>
                <input
                  type="email"
                  className="col-12"
                  id="exampleFormControlInput1"></input>
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label">
                Wiadomość
              </label>
              <input
                className="form-control rounded-0"
                id="exampleFormControlTextarea1"
                rows="3"></input>
            </div>
          </div>
          <button type="button" className="btn btn-outline-secondary ">
            Wyślij
          </button>
        </div>
        <div className="contact__footer">
          <div>
            <p>&copy;Konrad Oleszczuk / Wszelkie prawa zastrzeżone</p>
          </div>
          <div>
            <a href="https://www.instagram.com/kon_r6_ad/">instagram</a>
            <a
              className="ms-3"
              href="https://www.facebook.com/konrad.oleszczuk.3?locale=pl_PL">
              Facebook
            </a>
          </div>
          <div>
            <a href="#">made by EriNext</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
