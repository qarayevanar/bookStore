import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editBlog, removeBlog } from '../../../actions/blogAction'
import BlogForm from '../../../components/Blog/BlogForm'
import { Button } from 'react-bootstrap'
import EditHead from '../../../components/Blog/EditHead'

const EditBlog = (props: any) => {
    const navigate = useNavigate();
    const navigateto = useNavigate();
    return (
        <div>
            {/* <h1 className='text-center mt-5'>Edit Blog</h1> */}
            <EditHead />
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <div className="col-md-6">
                    <BlogForm editblog={props.pvalue}
                        blogSubmit={(a: any) => {
                            props.dispatch(editBlog(props.pvalue.id,a))
                            navigate('/dashboard')
                        }}
                    />
      <Button onClick={()=>{
          props.dispatch(removeBlog({id:props.pvalue.id}))
      navigateto('/dashboard')
          
      }} variant="danger" type="submit" className='mb-5'>
          Delete
        </Button>
                </div>
            </div>
        </div>
    )
}


const MapStateToProps = (state: any) => {

    const link = window.location.pathname;
    const mainpath = link.slice(6, 99);

    return {
        pvalue: state.find((b: any) => b.id === mainpath)
    }
}




export default connect(MapStateToProps)(EditBlog)