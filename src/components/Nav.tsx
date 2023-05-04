import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import DarkMode from "./Mode/DarkMode";
import LangContext from "../context/langContext";
import AuthContext from "../context/authContext";


const img = require("../assets/img/icon-book.png");

const Nav = () => {
  const ctx = useContext(LangContext);
  const authtx =useContext(AuthContext);


  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();




  return (

      <nav className="navbar navbar-expand-lg  mb-3 nav_bg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={img} alt="" width={70} />
          </Link>
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  ">
              <li className="nav-item ">
                <NavLink className="nav-link  text_color" to="/">
                  {ctx.lang.navbar.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  text_color" to="products">
                  {ctx.lang.navbar.products}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text_color" to="/blog">
                  {ctx.lang.navbar.blog}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text_color" to="121">
                  {ctx.lang.navbar.pages}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text_color" to="contactus">
                  {ctx.lang.navbar.contact}
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="cart" className="btn  me-2 text_color" type="submit">
                <i className="fa-solid fa-basket-shopping me-2 "></i>
                {totalItems}
              </Link>
              <Link to="wishlist" className="btn  me-2 text_color" type="submit">
                <i className="fa-regular fa-heart  me-2 "></i>
                {totalWishlistItems}
              </Link>
              {!authtx.isLoggedIn && <Link className="log-btn text-decoration-none" to='/login'>Login</Link>}
              {authtx.isLoggedIn && <div className="me-3 user text_color">Anar</div>}
              {authtx.isLoggedIn && <button className="log-btn" onClick={authtx.onLogout}>Logout</button>}
              <DarkMode />
              <button type="button" className="log-btn mx-3" onClick={ctx.changeLang}>{ctx.selectedLanguage}</button>
            </form>
          </div>
        </div>
      </nav>

  );
};

export default Nav;
