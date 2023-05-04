import LangContext from "../../context/langContext";
import {useContext} from 'react'

const Section2 =()=> {

    const ctx = useContext(LangContext);


        return(
            <div className="container-fluid  sec2-bg py-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-md-4 d-flex align-items-center justify-content-evenly">
                            <div>
                            <i className="fa-solid fa-book-open"></i>
                            </div>
                            <div>
                                <h5 className="" >{ctx.lang.section2.book}</h5>
                                <h6>{ctx.lang.section2.read}</h6>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 d-flex align-items-center justify-content-between justify-content-evenly">
                            <div>
                            <i className="fa-solid fa-plane-departure"></i>
                            </div>
                            <div>
                                <h5>{ctx.lang.section2.free}</h5>
                                <h6>{ctx.lang.section2.online}</h6>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 d-flex align-items-center justify-content-between justify-content-evenly">
                            <div>
                            <i className="fa-solid fa-wallet"></i>
                            </div>
                            <div>
                                <h5>{ctx.lang.section2.day}</h5>
                                <h6>{ctx.lang.section2.simple}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Section2