import Slider from "react-slick";
import "../css/offert.css";

function Offert() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="offert z-3 position-relative vertical" id="Offert">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="item">
            <p className="title mt-4 ms-4">Trening odchudzający</p>
            <div className="text-end mt-4 me-3 item-body">
              <p>Trening cardio (wytrzymałościowy)</p>
              <p>Trening interwałowy o wysokiej intensywności (HIIT)</p>
              <p>Trening siłowy</p>
              <p>Ćwiczenia funkcjonalne</p>
              <p>Monitorowanie postępów i modyfikacja planu treningowego</p>
            </div>
          </div>
          <div className="item ">
            <p className="title mt-4 ms-4">Trening Sylwetkowy</p>
            <div className="text-end mt-4 me-3 item-body">
              <p>Trening kardio (aerobowy)</p>
              <p>Trening siłowy</p>
              <p>Trening interwałowy o wysokiej intensywności (HIIT)</p>
              <p>Trening mobilności i rozciągania</p>
              <p>Trening core i stabilizacji</p>
            </div>
          </div>
          <div className="item">
            <p className="title mt-4 ms-4">Trening wytrzymałościowy </p>
            <div className="text-end mt-4 me-3 item-body">
              <p>Trening interwałowy o niskiej intensywności (LISS)</p>
              <p>Trening interwałowy o wysokiej intensywności (HIIT)</p>
              <p>Trening siłowy wytrzymałościowy</p>
              <p>Trening obwodowy (circuit training)</p>
              <p>Long Steady State - LSS</p>
            </div>
          </div>
          <div className="item">
            <p className="title mt-4 ms-4">trening siłowy </p>
            <div className="text-end mt-4 me-3 item-body">
              <p>Ćwiczenia wielostawowe (złożone)</p>
              <p>Ćwiczenia izolowane (jednostawowe)</p>
              <p>Zasady progresji i zwiększania obciążenia</p>
              <p>Techniki treningowe i programowanie</p>
              <p>Rozgrzewka i cool-down</p>
            </div>
          </div>
          <div className="item">
            <p className="title mt-4 ms-4">Trening funkcjonalny</p>
            <div className="text-end mt-4 me-3 item-body">
              <p>Ćwiczenia wielostawowe</p>
              <p>Ćwiczenia z własną masą ciała</p>
              <p>Ćwiczenia na równowagę i stabilność</p>
              <p>Trening core (mięśnie głębokie)</p>
              <p>Ćwiczenia plyometryczne</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Offert;
