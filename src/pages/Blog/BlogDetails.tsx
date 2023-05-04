import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const BlogDetails = (props: any) => {
  const { id } = useParams();
  const detailsItem = props.pvalue.find((p: any) => p.id == id)
  return (
    <div className="conatiner-fluied ">
        <div className="container-fluied head_bg py-3">
          <div className="container">
          <div className="row ">
            <div className="col-md-12 d-flex py-2">
              <div className=' blog_ul'>
                <li className=''><Link className='blog_details' to='/'><i className="fa-solid fa-house-chimney me-2"></i><i className="fa-solid fa-chevron-right   blog_detaol_icon"></i></Link></li>
                <li className=''><Link className='blog_details me-2' to='/blog'>Blogs <i className="fa-solid fa-chevron-right   blog_detaol_icon"></i></Link></li>
                <li className=''>{detailsItem.title}</li>
              </div>
            </div>
          </div>
          </div>
        </div>
      <div className="container ">
        <div className="row">

        </div>
        <div className="row">
          <div className="px-4  my-5 text-center border-bottom">
            <p className='bg-dt'>{detailsItem.category}</p>
            <h1 className="display-10 fw-bold text_color">{detailsItem.title}</h1>
            <p>By <span className='text_color fw-bold me-2'>acmeestaff   </span> <span className='sp_color'> on March 9, 2022</span></p>
            <div className="overflow-hidden my-3" style={{ maxHeight: '90vh' }}>
              <div className="container px-5">
                <img src={detailsItem.img} className="img border rounded-3 shadow-lg mb-4" alt="" />
              </div>
            </div>
            <div className="col-lg-12 mx-auto">
              <p className="lead mb-4">{detailsItem.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

const mapStateToProps = (state: any) => {
  return {
    pvalue: state
  }
}


export default connect(mapStateToProps)(BlogDetails);