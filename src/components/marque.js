import Marquee from "react-fast-marquee";

import "../css/marque.css";

const Marque = () => {
  return (
    <div className="marque ">
      <Marquee speed={300}>
        <p>
          Lets do it<span className="text-danger">!&nbsp;</span>
        </p>
        <p>
          Lets do it<span className="text-danger">!&nbsp;</span>
        </p>
        <p>
          Lets do it<span className="text-danger">!&nbsp;</span>
        </p>
        <p>
          Lets do it<span className="text-danger">!&nbsp;</span>
        </p>
        <p>
          Lets do it<span className="text-danger">!&nbsp;</span>
        </p>
        <p>
          Lets do it<span className="text-danger">!&nbsp;</span>
        </p>
      </Marquee>
      <div className="marque-bg">
        {/* <img src={process.env.PUBLIC_URL + "/img/marquebg.jpg"} alt="" /> */}
      </div>
    </div>
  );
};

export default Marque;
