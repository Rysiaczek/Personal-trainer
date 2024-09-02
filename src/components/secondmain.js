import "../css/secondmain.css";

function Secondmain() {
  return (
    <section className="secondmain vertical ">
      <div className="container-fluid">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/img1.jpg"}
            alt="Profile"
            className="img-fluid w-100 "
          />
          <div className="hero-shadow-second"></div>
        </div>
      </div>
    </section>
  );
}

export default Secondmain;
