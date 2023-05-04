import { useContext } from "react";
import LangContext from "../../context/langContext";

const img = require("../../assets/img/ready-made-books.jpg");
const img1 = require("../../assets/img/appetizer-bowl-delicious-1640772-700x700.jpg");
const img2 = require("../../assets/img/enjoying-music.jpg");
const img3 = require("../../assets/img/soul-is-a-river.jpg");
const img4 = require("../../assets/img/joan-of-arc-4022017_1280-700x700.jpg");

const Section5 = () => {
  const ctx = useContext(LangContext);

  return (
    <div className="container py-3 dp_non">
      <div className="row ">
        <div className="col-12 text-center">
          <h6 className="sec4-bg ">{ctx.lang.section5.h6}</h6>
          <h1 className="fw-bold text_color">{ctx.lang.section5.h1}</h1>
          <p className="paragraph">{ctx.lang.section5.p}</p>
        </div>
      </div>
      <div className="row g-4   d-flex justify-content-evenly  ">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="row g-4 mb-4">
            <div className="col-12 col-sm-6 col-md-6 ">
              <img src={img} alt="" className="rounded img_size_sec_five_one" />
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <img
                src={img1}
                alt=""
                className="rounded img_size_sec_five_one"
              />
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-md-6">
              <img
                src={img2}
                alt=""
                className="rounded img_size_sec_five_one"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <img
                src={img3}
                alt=""
                className="rounded img_size_sec_five_one"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 ">
          <img src={img4} alt="img" className="rounded img_size_sec_five" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
