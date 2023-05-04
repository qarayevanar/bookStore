import { useContext } from "react"
import { Link } from "react-router-dom"
import LangContext from "../context/langContext"


const Footer = ()=>{
    const ctx = useContext(LangContext)
    return (
            <div className="container-fluid footer-bg py-5">
                <div className="container">
 
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 ">
                            <img className="mb-5" src={'https://hostacmee.space/demo/bookchoix/wp-content/themes/bookchoix/assets/img/bookchoix-logo-w.svg'} alt="" width={200}/>
                             <p className="text-white"><i className="fa-solid fa-location-dot me-2"></i> 27/119, North Street, California</p>
                             <p className="text-white"><i className="fa-solid fa-envelope me-2"></i> contact@bookchoix.com</p>
                             <p className="text-white"><i className="fa-solid fa-phone me-2"></i> +123 4567890</p>

                        </div>
                        <div className="col-12 col-sm-6 col-md-3 text-white">
                            <h5 className="mb-4">{ctx.lang.footer.h5}</h5>
                            <p>
                            <Link to="/">{ctx.lang.footer.romance}</Link>
                            </p>
                            <p>
                            <Link to="/">{ctx.lang.footer.be}</Link>
                            </p>
                            <p>
                            <Link to="/">{ctx.lang.footer.thriller}</Link>
                            </p>
                            <p>
                            <Link to="/">{ctx.lang.footer.market}</Link>
                            </p>
                            <p>
                            <Link to="/">{ctx.lang.footer.bf}</Link>
                            </p>

                        </div>
                        <div className="col-12 col-sm-6 col-md-3 text-white">
                        <h5 className="mb-4">{ctx.lang.footer.ql}</h5>
                            <p>
                            <Link  to="/">{ctx.lang.footer.about}</Link>
                            </p>
                            <p>
                            <Link to="/">{ctx.lang.footer.faq}</Link>
                            </p>
                            <p>
                            <Link to="/">{ctx.lang.footer.shop}</Link>
                            </p>
                            <p>
                            <Link to="/">{ctx.lang.footer.ship}</Link>
                            </p>
                            <p>
                            <Link to="/">{ctx.lang.footer.refunf}</Link>
                            </p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3">
                            <h5 className="text-white mb-4">{ctx.lang.footer.fh5}</h5>
                            <p className="text-white mb-4">{ctx.lang.footer.p}</p>
                            <div className="d-flex  bg-white p-2 rounded">
                        <input type="text" className="form-control footer-input fst-italic" placeholder="Enter your email here"  />
                        <button className=" footer-btn" type="button" ><i className="fa-solid fa-paper-plane"></i></button>
                      </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
    )
}

export default Footer