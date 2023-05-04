import { useContext } from "react";
import LangContext from "../../context/langContext";
const img = require('../../assets/img/Henry.jpg');
const img1 = require('../../assets/img/mateus-campos-thumb-150x150.jpg');
// const   img2 = require('../../assets/img/Lucy.jpg');


const Section8 = () => {
    const ctx = useContext(LangContext);
    return (
        <div className="container-fluid  my-5 sec8-bg">
            <div className="container my-4">
                <div className="row g-5 p-5">
                    <div className="col-12 col-sm-12 col-md-5 text-white p-4">
                        <h1 className="fw-bold">{ctx.lang.section8.h1}</h1>
                        <p className="text-white">{ctx.lang.section8.p}</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 text-white">
                        <div className="row g-5 text-white d-flex justify-content-around align-items-center">
                            <div className="col-12 col-sm-12 col-md-5 sec8-left p-4 ">
                                <div className="d-flex justify-content-around align-items-center">
                                    <div >
                                        <img src={img} alt="" className="rounded-circle" width={70} />
                                    </div>
                                    <div>
                                        <h6>Henry</h6>
                                        <p>Team Leader</p>
                                    </div>
                                </div>
                                <hr />
                                <p>Lectus proin nibh nisl condimentum id. Integer vitae justo eget magna fermentum. Malesuada fames ac turpis egestas sed tempus urna.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 sec8-left p-4">
                                <div className="d-flex justify-content-around align-items-center">
                                    <div >
                                        <img src={img1} alt="" className="rounded-circle" width={70} />
                                    </div>
                                    <div>
                                        <h6>Jamie</h6>
                                        <p>Lead Designer</p>
                                    </div>
                                </div>
                                <hr />
                                <p>Lectus proin nibh nisl condimentum id. Integer vitae justo eget magna fermentum. Malesuada fames ac turpis egestas sed tempus urna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section8