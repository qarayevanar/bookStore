
const SingleBlogCardForBlogage = (props:any) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-12  my-3  text-center ">
        <p className='bg-dt'>{props.category}</p>
        <h1 className="display-10 fw-bold text_color">{props.title}</h1>
        <p>By <span className=' fw-bold me-2 text_color'>acmeestaff   </span> <span className='sp_color'> on March 9, 2022</span></p>
        <div className="overflow-hidden my-3" >
          <div className="container">
            <img src={props.photo} className="img border rounded-3 shadow-lg mb-4 blog_img" alt="" />
          </div>
        </div>
        <div className="col-md-10 mx-auto">
          <p className="lead mb-4">{props.desc}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleBlogCardForBlogage;