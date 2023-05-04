import { connect } from 'react-redux'
import SingleBlogCard from './SingleBlogCard'

const BlogList = (props: any) => {
    return (
        <div className='mt-5'>
            <div className="row g-5">
                {props.pvalue.slice(0, 3).map((item: any, i: number) => {
                    return <SingleBlogCard id={item.id} key={i} photo={item.img} title={item.title} category={item.category} desc={item.desc} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        pvalue: state
    }
}

export default connect(mapStateToProps)(BlogList)