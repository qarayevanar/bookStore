import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBlog } from '../../../actions/blogAction';
import BlogForm from '../../../components/Blog/BlogForm';
import AddBlogHead from './AddBlogHead';

const AddBlog = (props:any) => {
  const navigate = useNavigate();
  return (
    <div>
      <AddBlogHead />
      <div className='d-flex align-items-center justify-content-center flex-column'>
            <div className="col-md-6">
              <BlogForm blogSubmit={(fd:any)=>{
                props.dispatch(addBlog(fd));
                navigate('/dashboard')
              }}/>
            </div>
      </div>
    </div>
  )
}

export default connect()(AddBlog);