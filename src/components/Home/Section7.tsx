import { useContext } from "react";
import LangContext from "../../context/langContext";

const   img = require('../../assets/img/Lucy.jpg');
const   img2 = require('../../assets/img/tamara-bellis.jpg')
const   img3 = require('../../assets/img/ellie-thomson.jpg')
const   img4 = require('../../assets/img/garcia.jpg')


const Section7  =()=>{
    const ctx = useContext(LangContext);

    return(
        <div className="container-fluid background  sec7-media">
        <div className="container  mb-5">
            <div className="row my-2">
                <div className="col-12 text-center">
                <h6 className="sec6-bg text-center">{ctx.lang.section7.h6}</h6>
                <h1 className="fw-bold text-center text_color">{ctx.lang.section7.h1}</h1>
                <p className="paragraph">{ctx.lang.section7.p}</p>
                </div>
            </div>
            <div >
            <div className="row g-5">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="text-center p-4 sec7-card">
                        <img src={img} alt="" className="mb-3 rounded-circle "/>
                        <h5 className="text_color">Lucy</h5>
                        <h6 className="text_color">THRILLER WRITER</h6>
                        <p> Ornare suspendisse sed nisi lacus sed viverra. Sed blandit libero volutpat sed. Auctor...</p>
                        <div className="d-flex justify-content-evenly text_color">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-tumblr"></i>
                        <i className="fa-brands fa-spotify"></i>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="text-center p-4 sec7-card">
                        <img src={img2} alt="" className="mb-3 rounded-circle"/>
                        <h5 className="text_color">Janet</h5>
                        <h6 className="text_color"> Financial analyst</h6>
                        <p> Non quam lacus suspendisse faucibus interdum posuere. Adipiscing vitae proin sagittis nisl </p>
                        <div className="d-flex justify-content-evenly text_color">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-tumblr"></i>
                        <i className="fa-brands fa-spotify"></i>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="text-center p-4 sec7-card">
                        <img src={img3} alt="" className="mb-3 rounded-circle"/>
                        <h5 className="text_color"> Ellie Thomson</h5>
                        <h6 className="text_color"> Romance Writer</h6>
                        <p> Interdum velit laoreet id donec ultrices tincidunt. Purus faucibus ornare suspendisse sed. Vitae...</p>
                        <div className="d-flex justify-content-evenly text_color">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-tumblr"></i>
                        <i className="fa-brands fa-spotify"></i>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="text-center p-4 sec7-card">
                        <img src={img4} alt="" className="mb-3 rounded-circle"/>
                        <h5 className="text_color"> Henry </h5>
                        <h6 className="text_color"> Biography Writer</h6>
                        <p>  Interdum velit laoreet id donec ultrices tincidunt. Purus faucibus ornare suspendisse sed. Vitae...</p>
                        <div className="d-flex justify-content-evenly text_color">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-tumblr"></i>
                        <i className="fa-brands fa-spotify"></i>
                        </div>
                    </div>
                </div>
                
                {/* <div className="">
                    <div className="text-center p-4 sec7-card">
                        <img src={img3} alt="" className="mb-3 rounded-circle"/>
                        <h5> Ellie Thomson </h5>
                        <h6 > Romance Writer</h6>
                        <p> Interdum velit laoreet id donec ultrices tincidunt. Purus faucibus ornare suspendisse sed. Vitae...</p>
                        <div className="d-flex justify-content-evenly">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-tumblr"></i>
                        <i className="fa-brands fa-spotify"></i>
                        </div>
                    </div>
                </div> */}
                {/* <div className="">
                    <div className="text-center p-4 sec7-card">
                        <img src={img} alt="" className="mb-3 rounded-circle"/>
                        <h5>Lucy</h5>
                        <h6 >THRILLER WRITER</h6>
                        <p> Ornare suspendisse sed nisi lacus sed viverra. Sed blandit libero volutpat sed. Auctor...</p>
                        <div className="d-flex justify-content-evenly">
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-tumblr"></i>
                        <i className="fa-brands fa-spotify"></i>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
        </div>
    )
 }
 export default Section7