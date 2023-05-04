import CountdownTimer from "./CountdownTimer"
import { Link } from "react-router-dom"
import ProductsSale from "../ProductComponent/ProductsSale"
import { useContext } from "react"
import LangContext from "../../context/langContext"


 const Section6  =()=>{
    const ctx = useContext(LangContext);
    return(
        <div className="container py-5">
            <div className="row ">
                <div className="col-12 text-center">
                <h6 className="sec6-bg text-center ">{ctx.lang.section6.h6}</h6>
                <h1 className="fw-bold text-center text_color">{ctx.lang.section6.h1}</h1>
                <Link className="text-decoration-none  text_color" to='/products'>{ctx.lang.section6.link} <i className="fa-solid fa-arrow-right"></i></Link>
                <CountdownTimer 
                countdownTimestampMs={1735686000000}
                />
                </div>
            </div>
            <div className="row">
            <ProductsSale />
            </div>
        </div>
    )
 }
 export default Section6