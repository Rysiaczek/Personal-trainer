import "./Header.css";

function Header() {
  return (
    <div id="header">
      <section className="header">
        <div className="header-content container mt-5 w-100">
          <div className="h-100 row align-content-center align-items-lg-center ">
            <div className="row justify-content-flex-start justify-content-lg-center">
              <div className="col col-lg-4 header-content-title justify-content-end">
                <p className=" text-light fw-bold mb-5  ">
                  Trener<span>Personalny</span>
                </p>
              </div>
            </div>
            <div className="row  justify-content-lg-between">
              <div className="col-0 col-lg-5">
                <p className="text-light text-left mt-3 mt-lg-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis voluptate cupiditate modi labore ad tempora similique
                  esse repellendus praesentium ipsam eos accusamus sit, ab illum
                  nisi quidem, nihil facilis. Blanditiis.
                </p>
              </div>

              <div className="col-0 col-lg-1 d-none d-lg-block align-self-end text-end">
                <p className="text-light ">scroll</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-video">
          <video autoPlay muted loop id="myVideo">
            <source
              src={process.env.PUBLIC_URL + "/img/header-bg.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="hero-shadow"></div>
      </section>
    </div>
  );
}

export default Header;
