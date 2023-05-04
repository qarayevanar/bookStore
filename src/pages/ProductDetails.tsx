import { Link, useParams } from "react-router-dom";
import productlist from "../data/productData";
import { useCart } from "react-use-cart"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Products from "../components/Home/Products";
import ProductDetailsHead from "../components/ProductComponent/ProductDetailsHead";
import { useContext } from "react";
import LangContext from "../context/langContext";
import { useWishlist } from "react-use-wishlist";




const ProductDetails = () => {
  const ctx = useContext(LangContext);
  const { id } = useParams<{ id?: string }>();
  const detailItems: any = productlist.find(p => p.id === id)
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();

  const notify: any = () => toast.success('Product  added to card!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notif: any = () => toast.success('Product  added to ❤️', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });


  return (
    <div className="container-fluid">
      <ProductDetailsHead />
      <div className='container'>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 ">
            <div className="col-md-6">
              <h1 className="display-5 fw-bold lh-1 mb-3 text_color">{detailItems.title}</h1>
              <p className="fs-2 fst-italic paragraph">{detailItems.author}</p>
              <p className="paragraph">{detailItems.desc}</p>
              <div className="d-flex  align-items-center">
                <p className="fw-bold mt-3 me-2 paragraph">Price:{detailItems.price}$</p>
                <button className="productdetail-btn me-3" type="button" onClick={() => { notify(addItem(detailItems)) }}><i className="fa-solid fa-basket-shopping"></i></button>
                <button className="productdetail-btn" type="button" onClick={() => {notif(addWishlistItem(detailItems))}} ><i className="fa-regular fa-heart"></i></button>
                <ToastContainer />
              </div>
            </div>
            <div className="col-10 col-sm-8 col-md-6">
              <img src={detailItems.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={300} height={300} loading="lazy" />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12">
            <Link className="text-decoration-none  fs-5 fw-light text_color" to='/products'>{ctx.lang.section4.link} <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
          <Products />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;