import { useContext } from 'react';
import { Link } from 'react-router-dom'
import LangContext from '../../context/langContext';

const ContactHead = () => {
    const ctx = useContext(LangContext)
    return (

        <div className='container-fluid head_bg '>
            <div className="container py-2">
                <div className="row ">
                    <div className="col-md-12 d-flex align-items-center justify-content-between">
                        <h1 className="fw-bold text_color">{ctx.lang.contacthead.head}</h1>
                        <div className='blog_ul'>
                            <li className='blog_li'><Link className='blog_li' to='/'><i className="fa-solid fa-house-chimney text_color"></i></Link></li>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactHead;