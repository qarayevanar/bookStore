import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Footer from "../components/Footer"
import FooterAnimation from "../components/FooterAnimation"
import Nav from "../components/Nav"
import Home from "../pages/Home"
import ScrollToTop from "react-scroll-to-top";
import ProductDetails from "../pages/ProductDetails"
import Cart from "../components/Home/Cart&Wishlist/Cart"
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from 'react-use-wishlist'
import Wishlist from '../components/Home/Cart&Wishlist/Wishlist'
import NotFoundPage from '../pages/NotFoundPage'
import ContactUS from '../components/Contact/Contact'
import LoginNew from '../components/Auth/LoginNew'
import AddBlog from '../pages/admin/uptade/AddBlog'
import EditBlog from '../pages/admin/uptade/EditBlog'
import Blog from '../pages/Blog/Blog'
import Dashboard from '../pages/admin/Dashboard'
import BlogDetails from '../pages/Blog/BlogDetails'
import ProductPage from '../pages/ProductPage'
import { LanguageContextProvider } from '../context/langContext'
import { AuthContextProvider } from '../context/authContext'
import CreditCardForm from '../pages/Checkout/CreditCardForm'



const AppRoute: React.FunctionComponent = () =>{

    return (
        <BrowserRouter>
        <AuthContextProvider>
        <LanguageContextProvider>
        <CartProvider>
        <WishlistProvider>
        <Nav />
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/product/:id" element={<ProductDetails />}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='products' element={<ProductPage/>}></Route>
                <Route path='/wishlist' element={<Wishlist/>}></Route>
                <Route path="/blogs/:id" element={<BlogDetails/>}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path="/add" element={<AddBlog />}></Route>
                <Route path="/edit/:id" element={<EditBlog />}></Route>
                <Route path='*' element={<NotFoundPage/>}></Route>
                <Route path='/login' element={<LoginNew/>}></Route>
                <Route path='/contactus' element={<ContactUS/>}></Route>
                <Route path='/creditcard' element={<CreditCardForm />}></Route>
            </Routes>
            <ScrollToTop smooth  color='#F18E7D' />
            <FooterAnimation />
                <Footer />
        </WishlistProvider>
        </CartProvider>
        </LanguageContextProvider >
        </AuthContextProvider>
        </BrowserRouter>
    )
}

export default AppRoute;