import { Helmet } from "react-helmet";
import ContactHead from "./ContactHead";
import LangContext from "../../context/langContext";
import {useContext} from 'react'

const Contact = () => {
    const ctx = useContext(LangContext)
    return (
        <>
            <div className="container-fluid">
            <Helmet>
        <title>Contact Us</title>
    </Helmet>
                <div className="row"><ContactHead /></div>
                
                <div className="row  ">
                    <div className="col-12 col-sm-6 col-md-6 contact-left p-5 text-white">
                        <h1 className="text-center">{ctx.lang.contact.left.contact}</h1>
                        <h6 className="text-center">{ctx.lang.contact.left.h6} 24/7/365</h6>
                        <h3> <i className="fa-regular fa-paper-plane"></i> {ctx.lang.contact.left.h3} </h3>
                        <hr />
                        <h6 className="mb-5">Beckam Street, California – 19 United States of America</h6>
                        <h3><i className="fa-solid fa-phone"></i> {ctx.lang.contact.left.h3c} </h3>
                        <hr />
                        <h6>{ctx.lang.contact.left.h6week} : 10am – 8pm</h6>
                        <h6><i className="fa-solid fa-at"></i>+123 124567890</h6>
                        <h6 className="mb-5"><i className="fa-solid fa-at"></i>+123 789456123</h6>
                        <h3><i className="fa-regular fa-envelope"></i> {ctx.lang.contact.left.h3write}</h3>
                        <hr />
                        <h6>help@bookchoix.support</h6>
                        <h6>hsales@bookchoix.support</h6>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 text-center p-5 contact-right">
                        <h6 className="text-bg ">{ctx.lang.contact.right.h6}</h6>
                        <h1 className="contact-h1 text_color">{ctx.lang.contact.right.h1}</h1>
                        <h6 className="text-center text_color">{ctx.lang.contact.right.h61} 24/7/365</h6>
                        <div className="mt-4">
                            <form className="px-5 text-start">
                                <div>
                                    <div className="row d-flex justify-content-between mb-5">
                                        <div className="mb-3 d-flex flex-column col-12 col-sm-12 col-md-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label text_contact">{ctx.lang.contact.right.firstname} <sup className="text-danger">*</sup></label>
                                            <input type="text" className=" contact-input" />
                                        </div>
                                        <div className="mb-3 d-flex flex-column col-12 col-sm-12 col-md-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label text_contact">{ctx.lang.contact.right.lastname} <sup className="text-danger">*</sup></label>
                                            <input type="text" className=" contact-input" />
                                        </div>
                                    </div>

                                    <div className="row d-flex justify-content-between mb-3">
                                        <div className="mb-3  d-flex flex-column col-12 col-sm-12 col-md-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label text_contact">{ctx.lang.contact.right.email} <sup className="text-danger">*</sup></label>
                                            <input type="email" className=" contact-input" />
                                        </div>
                                        <div className="mb-3 d-flex flex-column col-12 col-sm-12 col-md-6">
                                            <label htmlFor="exampleInputEmail1" className="form-label text_contact">{ctx.lang.contact.right.phone}</label>
                                            <input type="number" className=" contact-input" />
                                        </div>
                                    </div>
                                    <div className="mb-3  d-flex flex-column">
                                        <label htmlFor="exampleInputEmail1" className="form-label text_contact">{ctx.lang.contact.right.subject}  <sup className="text-danger">*</sup></label>
                                        <input type="text" className=" contact-input2" />
                                    </div>
                                    <div className="mb-3  d-flex flex-column">
                                        <label htmlFor="exampleInputEmail1" className="form-label text_contact">{ctx.lang.contact.right.message} <sup className="text-danger"> *</sup></label>
                                        <textarea className=" contact-input2" />
                                    </div>
                                </div>
                                <button className="btn btn-success fw-bold mt-3">{ctx.lang.contact.right.btn}</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <h1 className="text-center fw-bold my-3 text_color">{ctx.lang.contact.right.map}</h1>
                    <div className="col-12 col-sm-12 col-md-12">
                        <iframe title="uniqueTitle"
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d12160.402923608051!2d49.97069663284911!3d40.36229076769535!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzA0LjgiTiA0OcKwNTEnMzguMCJF!5e0!3m2!1saz!2saz!4v1677927141150!5m2!1saz!2saz"
                            width="100%"
                            height="550"
                            style={{ border: 0 }}
                            loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
