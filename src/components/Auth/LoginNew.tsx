import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import LangContext from "../../context/langContext"
import AuthContext from "../../context/authContext"

const logimg1 = require('../../assets/img/login-img.png')
const logimg2 = require('../../assets/img/login-img2.png')

interface userType {
  [x: string]: string
  email: string,
  pass: string
}

const user: userType = {
  email: 'anar@.az',
  pass: '123',
}

const LoginNew = () => {
  const ctx = useContext(LangContext);
  const authtx =useContext(AuthContext);
  const inputEmailRef = useRef<HTMLInputElement>(null)
  const inputPassRef = useRef<HTMLInputElement>(null)
  const [style, setStyle] = useState('');
  const [text, setText] = useState('');
  const navigate = useNavigate();


  const formSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if (!inputEmailRef.current?.value || !inputPassRef.current?.value) {
          setStyle(`warning`)
          setText('Please, fill input')
      } else {
          if (inputEmailRef.current.value === user.email && inputPassRef.current.value === user.pass) {
            authtx.onLogin(inputEmailRef.current.value,inputPassRef.current.value);
              navigate('/products')
          // }else if (inputEmailRef.current.value === user.emailAdmin && inputPassRef.current.value === user.passAdmin){
          //   navigate('/dashboard');
          } else {
              setStyle(`danger`)
              setText('Email or Password is wrong')
          }
      }
  }

  const [addClass,setAddClas] = useState('');

  const AddClass =()=>{
    setAddClas('sign-up-mode');
  }

  const removeClass =()=>{
    setAddClas('');
  }

  return (
    <div className="container-fluied mb-5">
                 <Helmet>
        <title>Login</title>
    </Helmet>
    <div className={`container-login background ${addClass} `} >
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="form-log sign-in-form " onSubmit={formSubmit}>
          <h1 className={`text-center text_color text-${style}`}>{ctx.lang.login.signin}</h1>
          <h4 className={`text-center mb-2 text-${style}`}>{text}</h4>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" ref={inputEmailRef}  placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" ref={inputPassRef} placeholder="Password" />
            </div>
            <button type="submit" defaultValue="Login" className="btn-log solid">{ctx.lang.login.submit}</button>
            {/* <input type="submit" defaultValue="Login" className="btn-log solid" /> */}
            <p className="social-text">{ctx.lang.login.p}</p>
            <div className="social-media">
              <a href="r" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="r" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="r" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="r" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
          <form action="#" className="form-log sign-up-form">
            <h2 className="title text_color">{ctx.lang.login.signup}</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" defaultValue="Sign up" className="btn-log solid">{ctx.lang.login.submit}</button>
            {/* <input type="submit" className="btn-log" defaultValue="Sign up" /> */}
            <p className="social-text">{ctx.lang.login.p}</p>
            <div className="social-media">
              <a href="r" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="r" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="r" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="u" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="text_login">{ctx.lang.login.h3}</h3>
            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p> */}
            <button onClick={AddClass} type='submit' className="btn-log transparent" >
            {ctx.lang.login.signup}
            </button>
          </div>
          <img src={logimg1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="text_login">{ctx.lang.login.h31}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button onClick={removeClass} className="btn-log transparent" id="sign-in-btn">
            {ctx.lang.login.signin}
            </button>
          </div>
          <img src={logimg2} className="image" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default LoginNew


