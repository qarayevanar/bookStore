import { Link } from "react-router-dom";
import { useCart } from "react-use-cart"
import { useWishlist } from "react-use-wishlist";

type propsType = {
  id: string,
  title: string,
  price: number,
  desc: string,
  category: string,
  image: string,
  author: string
}

function SingleCard(props: propsType) {
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();






  return (
    <div data-aos="zoom-out-down" className="col-12 col-sm-6 col-md-3 d-flex justify-content-center">

      <div className="card_new">
        <div className="face face1 ">
          <div className="content">
            <img className="mb-2" src={props.image} alt="" height={250} />
            <h4>{(props.title).substring(0, 18)}</h4>
          </div>
        </div>
        <div className="face face2">
          <div className="content text-center">
            <h4>{props.author}</h4>
            <p className="text-muted">{props.category}</p>
            <h4>{props.price}$</h4>
            <div className="d-flex justify-content-around buttons">
              <Link to={`/product/${props.id}`}><button><i className="fa-solid fa-eye"></i></button></Link>
              <button type="button" onClick={() => addWishlistItem(props)} ><i className="fa-regular fa-heart"></i></button>
              <button type="button" onClick={() => addItem(props)}><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>




























    // const notify:any = () => toast.success('Product  added!', {
    //     position: "bottom-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });

    //     const notif:any = () => toast.info('Product added to ❤️', {
    //         position: "bottom-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //         });




    // <div data-aos="zoom-out-down" className="col-12 col-sm-6 col-md-3">
    //     <div className="card">
    //         <div className="main">
    //         <img src={props.image} className="card-img-top" alt="..."  height={400} />
    //         <div className="btn-div"> 
    //             <div className="buttons">
    //                 <Link to={`/product/${props.id}`}><button><i className="fa-solid fa-eye"></i></button></Link>
    //                 <button type="button" onClick={()=>addWishlistItem(props)} ><i className="fa-regular fa-heart"></i></button>
    //                 <button type="button" onClick={()=>addItem(props)}><i className="fa-solid fa-basket-shopping"></i></button>
    //              </div>
    //         </div>
    //         </div>
    //         <div className="card-body">
    //             <p className="card-text text-secondary">{props.category}</p>
    //             <h5 className="card-title">{(props.title).substring(0,25)}</h5>
    //             <p className="card-text">{props.author}</p>
    //             <p className="card-text card-price">{props.price}$</p>
    //         </div>
    //     </div>

    // </div>
  )
}

export default SingleCard;