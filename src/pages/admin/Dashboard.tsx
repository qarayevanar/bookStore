import { connect } from 'react-redux';
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DashboardHead from './DashboardHead';

const Dashboard = (props: any) => {
    return (
        <>
            <div className="container-fluied">
                <DashboardHead />
                <div className="container">
                    <div className="row">

                        <Link to='/add'><Button className='mb-5 add-btn'>Add</Button></Link>
                        <Table  bordered hover className='mb-5'>
                            <thead>
                                <tr>
                                    <th className='text_color'>#</th>
                                    <th className='text_color'>Blog photo</th>
                                    <th className='text_color'>Blog title</th>
                                    <th className='text_color'>Blog description</th>
                                    <th className='text_color'>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.pvalue.map((item: any, i: any) => (
                                    <tr key={i} className='background'>
                                        <td className='text_color'>{i + 1}</td>
                                        <td className='text_color'><img width={50} src={item.img} alt="" /></td>
                                        <td className='text_color'>{item.category}</td>
                                        <td className='text_color'>{item.title}</td>
                                        <td className='text_color'>{item.desc.substring(0, 30)}</td>
                                        <td className='text-center text_color'><Link to={`/edit/${item.id}`}><Button className='edit-btn ' ><i className="fa-regular fa-pen-to-square"></i></Button></Link></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>


        </>
    )
}



const mapStateToProps = (state: any) => {
    return {
        pvalue: state
    }
}

export default connect(mapStateToProps)(Dashboard)
