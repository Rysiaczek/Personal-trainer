import "../css/main.css";

function Main() {
  return (
    <div className="main position-relative z-3" id="About">
      <div className="container-fluid  pt-5">
        <div className="row justify-content-center">
          <p className=" main-title col-12 display-1 text-center pt-5 text-light">
            Twoj cel to moja misja
          </p>
          <img
            src={process.env.PUBLIC_URL + "/img/prof.jpg"}
            alt=""
            className="col-12 col-lg-5 me-0 me-lg-5"
            style={{ height: "550px", width: "500px" }}
          />
          <div className="col-12 col-lg-8 ms-0 ms-md-5">
            <div className="row ms-auto main-content justify-content-center">
              <p className="text-light col-10 main-content-first">
                AAALorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat nam eligendi nostrum delectus enim. Aperiam voluptatum,
                eaque et animi eos quae explicabo, pariatur molestiae cupiditate
                placeat, harum incidunt illo? Tempore.
              </p>
              <p className="text-light col-6 col-lg-5 pe-0 pe-lg-0 main-content-sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus at a reprehenderit et! Vitae corporis a natus minima
                eum amet, vel obcaecati quos molestias dolore. Tenetur
                exercitationem laboriosam quaerat at.
              </p>
              <p className="text-light col-6 col-lg-5 ps-0 ps-sm-5 main-content-sub">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae esse ducimus maiores, in nostrum ratione ex minima
                asperiores quisquam quam at voluptatum enim error a inventore
                dicta! Iusto, id officia?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
