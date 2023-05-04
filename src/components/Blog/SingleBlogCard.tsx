import { Link } from 'react-router-dom'

const SingleBlogCard = (props:any) => {
  return (
    <div className="col-12 col-sm-12 col-md-4">
    <div className="card sec10-card background"  >
        <img src={props.photo} className="card-img-top " alt="..." width={400}/>
        <div className="card-body ">
            <p className="paragraph">{props.category}</p>
            <h4 className="fw-bold text_color">{props.title.substring(0,25)}</h4>
            <p className="paragraph">{props.desc.substring(0,50)}</p>
            <Link to={`/blogs/${props.id}`}><button type='submit' className="btn btn-dark">Read more</button></Link>
        </div>
    </div>
</div>
  )
}

export default SingleBlogCard;