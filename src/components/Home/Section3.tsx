import { useContext } from "react";
import LangContext from "../../context/langContext";
const img = require('../../assets/img/undraw2.png')


const  Section3 =()=> {
    const ctx = useContext(LangContext);

        return (
            <div className="container-fluid background py-5">
           <div className="container  py-5">
            <div className="row g-3 d-flex d-flex align-items-center justify-content-around">
                <div className="col-12 col-sm-12 col-md-6  d-flex justify-content-end ">
                    <img src={img} alt="" className="img_size_sec_three"/>
                </div>
                <div className="col-12 col-sm-12 col-md-6 p-5 sec_con">
                    <h6 className="sec3-h6 ">{ctx.lang.section3.h6}</h6>
                    <h1 className="h1 text_color">{ctx.lang.section3.h1}</h1>
                    <p className="paragraph">{ctx.lang.section3.p}</p>
                    <button className="sec3-btn">{ctx.lang.section3.btn}</button>
                </div>
            </div>
           </div>
           </div>
        )
    }


export default Section3