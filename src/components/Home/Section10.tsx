import { useContext } from "react";
import BlogList from "../Blog/BlogList";
import LangContext from "../../context/langContext";
 




const Section10 = () => {
    const ctx = useContext(LangContext)
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 my-2">
                <div className="col-12 text-center">
                <h6 className="sec6-bg text-center">{ctx.lang.section10.h6}</h6>
                <h1 className="fw-bold text-center text_color">{ctx.lang.section10.h1}</h1>
                <p className="paragraph">{ctx.lang.section10.p}</p>
                </div>
                </div>
            </div>
            <BlogList />
        </div>
    )
}

export default Section10;