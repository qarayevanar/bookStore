import { useContext } from "react"
import LangContext from "../../context/langContext"


const Section9 = () => {
    const ctx =useContext(LangContext)
    return (
        <div className="container  sec9-bg my-5 p-5">
            <div className="row m-5">
                <div className="col-12 text-center">
                    <h6 className="sec9-bg-h6 mb-2">{ctx.lang.section9.h6}</h6>
                    <h1 className="text-white fw-bold sec9-bg-h1 mb-3 ">{ctx.lang.section9.h1}</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur elit.</p>
                    <div className="d-flex  bg-white p-2 rounded">
                        <input type="text" className="form-control sec9-input" placeholder="Enter your email address"  />
                        <button className="sec9-btn" type="button" >{ctx.lang.section9.btn}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section9