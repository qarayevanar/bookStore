import { Link } from "react-router-dom"

const EditHead = () => {
    return (
        <div className='container-fluied head_bg mb-5'>
        <div className="container py-2">
        <div className="row ">
            <div className="col-md-12 d-flex align-items-center justify-content-between">
                <h1 className="fw-bold">Edit Blog</h1>
                <div className=' blog_ul'>
                    <li className='blog_li'><Link className='blog_li' to='/'><i className="fa-solid fa-house-chimney"></i></Link></li>
                    <li className='blog_li '><Link className='blog_li'  to='/dashboard'>Dashboard</Link></li>
                </div>
            </div>
        </div>
        </div>

    </div>
    )
}

export default EditHead