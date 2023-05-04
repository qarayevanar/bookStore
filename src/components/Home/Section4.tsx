import { Link } from "react-router-dom"
import Products from "./Products"
import { useContext } from "react"
import LangContext from "../../context/langContext"

const Section4 = () => {
    const ctx = useContext(LangContext);
    return (
        <div className="container pt-5">
            <div className="row ">
                <div className="col-12 text-center">
                    <h6 className="sec4-bg  ">{ctx.lang.section4.h6}</h6>
                    <h1 className="fw-bold text_color">{ctx.lang.section4.h1}</h1>
                    <p className="paragraph">{ctx.lang.section4.p}</p>
                    <Link className="text-decoration-none text_color" to='/products'>{ctx.lang.section4.link} <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
            <div className="row">
                <Products />
            </div>
        </div>
    )
}
export default Section4