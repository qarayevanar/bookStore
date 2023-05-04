import { useWishlist } from "react-use-wishlist"
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from "react-use-cart";
import { Helmet } from "react-helmet";


const Wishlist = ()=>{
    const {addItem} = useCart();
    const {
        items,
        isWishlistEmpty,
        removeWishlistItem,
      } = useWishlist();

      const notify:any = () => toast.error('Product deleted!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


        if (isWishlistEmpty) return <div className='d-flex justify-content-center my-5'><img  src="https://media4.giphy.com/media/0HhDnlH89djZtRqYoO/giphy.gif"alt=""  /></div>

    return(
        <div className='container mb-5 cart-wish table-responsive table-responsive-sm table-responsive-md'>
                     <Helmet>
        <title>Whislist</title>
    </Helmet>
          <table className='table mb-5'>
            <thead>
              <tr>
                <th className='text_color' scope="col">Id</th>
                <th className='text_color' scope="col">Photo</th>
                <th className='text_color' scope="col">Title</th>
                <th className='text_color' scope="col">Price</th>
                <th className='text_color' scope="col">Add to cart</th>
                <th className='text_color' scope="col">Delete</th>
              </tr>
            </thead>
            <tbody >
              {items.map((item: any, id) => (
                <tr key={item.id}>
                  <th className='text_color' scope="row">{item.id}</th>
                  <td className='text_color'><img src={item.image} width="50" alt="" /></td>
                  <td className='text_color'>{item.title}</td>
                  <td className='text_color'>{item.price}$</td>
                  <td className='text_color'><button className="btn btn-success" onClick={()=>{addItem(item)}}><i className="fa-solid fa-basket-shopping"></i></button></td>
                  <td className='text_color'><button className='btn btn-danger' onClick={() =>{notify(removeWishlistItem(item.id))}}>&times;</button>
                    <ToastContainer
                      position="bottom-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                  </td>
                </tr>
              ))}
    
            </tbody>
          </table>
        </div>
      )
    
}

export default Wishlist;
