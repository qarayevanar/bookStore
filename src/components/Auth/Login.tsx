import { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

interface userType {
    email: string,
    pass: string
}

const user: userType = {
    email: 'anar@.az',
    pass: '123'
}

const Login = () => {
    const inputEmailRef = useRef<HTMLInputElement>(null)
    const inputPassRef = useRef<HTMLInputElement>(null)
    const [style, setStyle] = useState('');
    const [text, setText] = useState('')
    const navigate = useNavigate();


    const formSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!inputEmailRef.current?.value || !inputPassRef.current?.value) {
            setStyle(`warning`)
            setText('Please, fill input')
        } else {
            if (inputEmailRef.current.value === user.email && inputPassRef.current.value === user.pass) {
                navigate('/products');
            } else {
                setStyle(`danger`)
                setText('Email or Password is wrong')
            }
        }
    }

    return (
        <>
            <div className='container my-5 login'>
                <div className='row my-5'>
                    <div className='col-12  d-flex justify-content-center align-items-center '>
                        <form onSubmit={formSubmit}>
                            <h1 className={`text-center text-${style}`}><i className="fa-solid fa-book"></i></h1>
                            <h4 className={`text-center mb-2 text-${style}`}>{text}</h4>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" ref={inputEmailRef} placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={inputPassRef} placeholder="Password" />
                                <Form.Check className='my-2' label='Remember me'/>
                            </Form.Group>

                            <Button className='d-flex justify-content-center' variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;