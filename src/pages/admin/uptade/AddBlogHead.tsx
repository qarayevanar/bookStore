import React from 'react'
import { Link } from 'react-router-dom'

const AddBlogHead = () => {
    return (
        <div>
            <div className='container-fluied head_bg mb-5'>
                <div className="container py-3">
                    <div className="row ">
                        <div className="col-md-12 d-flex align-items-center justify-content-between">
                            <h1 className="fw-bold">Admin Dashboard</h1>
                            <div className=' blog_ul'>
                                <li className='blog_li'><Link className='blog_details ' to='/'><i className=" fa-solid fa-house-chimney me-2"></i><i className="fa-solid fa-chevron-right   blog_detaol_icon"></i></Link></li>
                                <li className=''><Link className='blog_details' to='/dashboard'>Dashboard </Link></li>
                            </div>
                        </div>
                    </div>
                </div>

            </div></div>
    )
}

export default AddBlogHead