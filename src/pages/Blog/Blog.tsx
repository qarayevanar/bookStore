import {connect} from 'react-redux'
import BlogHeader from './BlogHeader'
import SingleBlogCardForBlogage from '../../components/Blog/SingleBlogCardForBlogage'
import { Helmet } from 'react-helmet'

const Blog = (props:any) => {
  return (
      <>
      <Helmet>
        <title>Blogs</title>
    </Helmet>
      <BlogHeader />
      <div className='row'>
        {props.pvalue.map((item:any, i:any)=>{
          return <SingleBlogCardForBlogage  id={item.id} key={i} photo={item.img} title={item.title} category={item.category} desc={item.desc}/>
        })}
      </div>
      </>
  )
}

const mapStateToProps = (state: any) =>{
  return {
    pvalue:state
  }
}

export default connect(mapStateToProps)(Blog)