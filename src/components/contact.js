import "../css/contact.css";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .sendForm("service_k28heer", "template_hec8z95", form.current, {
        publicKey: "1xYn4ZEuM6NgAhwfY",
      })
      .then(
        () => {
          alert("Wiadomość została wysłana");
          reset();
        },
        (error) => {
          alert("Coś poszło nie tak, spróbuj ponownie");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className="contact__fixed z-0">
          <div className="contact__title">
            <p className="display-5 display-lg-2 ">
              Masz jakieś pytanie? zadaj je
            </p>
          </div>

          <div className="container contact-body">
            <div className="w-100">
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                  <label htmlFor="FirstNameInput">Imię</label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    aria-label="First name"
                    id="FirstNameInput"
                    {...register("user_name", {
                      required: "Imię jest wymagane",
                      minLength: {
                        value: 2,
                        message: "Imię musi zawierać co najmniej 2 znaki",
                      },
                    })}
                  />
                  {errors.user_name && (
                    <p className="error-message">{errors.user_name.message}</p>
                  )}
                </div>
                <div className="col ms-auto mt-3 mt-lg-0">
                  <label htmlFor="LastNameInput">Nazwisko</label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    aria-label="Last name"
                    id="LastNameInput"
                    {...register("user_surname", {
                      required: "Nazwisko jest wymagane",
                      minLength: {
                        value: 2,
                        message: "Nazwisko musi zawierać co najmniej 2 znaki",
                      },
                    })}
                  />
                  {errors.user_surname && (
                    <p className="error-message">
                      {errors.user_surname.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col mt-3">
                  <label htmlFor="email" className="">
                    Adres Email
                  </label>
                  <input
                    type="email"
                    className="form-control  rounded-0"
                    id="email"
                    {...register("user_email", {
                      required: "Email jest wymagany",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Nieprawidłowy adres email",
                      },
                    })}
                  />
                  {errors.user_email && (
                    <p className="error-message">{errors.user_email.message}</p>
                  )}
                </div>

                <div className="col ms-auto mt-3">
                  <label htmlFor="phone" className="">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="form-control rounded-0"
                    id="phone"
                    {...register("user_phone", {
                      required: "Telefon jest wymagany",
                      pattern: {
                        value: /^[0-9]{9,}$/,
                        message:
                          "Numer telefonu musi zawierać co najmniej 9 cyfr",
                      },
                    })}
                  />
                  {errors.user_phone && (
                    <p className="error-message">{errors.user_phone.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-0 mb-lg-3 mt-3">
                <label htmlFor="message" className="form-label">
                  Wiadomość
                </label>
                <input
                  className="form-control rounded-0"
                  id="message"
                  {...register("message", {
                    required: "Wiadomość jest wymagana",
                    minLength: {
                      value: 10,
                      message: "Wiadomość musi zawierać co najmniej 10 znaków",
                    },
                  })}
                />
                {errors.message && (
                  <p className="error-message">{errors.message.message}</p>
                )}
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-outline-secondary button mt-4 mb-3 mb-lg-0"
              value={"Wyślij"}
            />
          </div>

          <div className="contact__footer">
            <div className="contact__footer-links">
              <a
                href="https://www.instagram.com/kon_r6_ad/"
                target="_blank"
                rel="noreferrer">
                instagram
              </a>
              <a
                className="ms-lg-3"
                href="https://www.facebook.com/konrad.oleszczuk.3?locale=pl_PL"
                target="_blank"
                rel="noreferrer">
                Facebook
              </a>
              <a className="ms-lg-3">
                <span>+48 575 063 205</span>
              </a>
              <a className="ms-lg-3 email__link">treningzkonradem@gmail.com</a>
            </div>
            <div className="mt-2 footer__info">
              <div>
                <p>&copy;Konrad Oleszczuk / Wszelkie prawa zastrzeżone</p>
              </div>
              <div className="mt-0 author">
                <a href="#">made by EriNext</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
