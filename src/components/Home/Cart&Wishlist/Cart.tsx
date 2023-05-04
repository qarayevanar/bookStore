/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import LangContext from '../../../context/langContext';
import AuthContext from '../../../context/authContext';
import { useNavigate } from 'react-router-dom';



const Cart = () => {
  const ctx= useContext(LangContext);
  const authtx =useContext(AuthContext)
  const navigate= useNavigate();

  const {
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
    isEmpty
  } = useCart();



  const checkOut = () => {
    if(!authtx.isLoggedIn){
      navigate('/login')
    }else {
      navigate('/creditcard')
      emptyCart()
    }
  }

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


    if (isEmpty) return <div className='d-flex justify-content-center mb-5'><img  src="https://media1.giphy.com/media/Aik2hwXn0dUTrVkbIP/giphy.gif?cid=6c09b952q8thmni4fivwjye7u7jyn95rjt9jqquo0lspyuh3&rid=giphy.gif&ct=s" alt=""  /></div>
  return (
    
    <div className='container my-5  pb-5 cart-wish table-responsive table-responsive-sm table-responsive-md'>
                 <Helmet>
        <title>Cart</title>
    </Helmet>
      <table className='table'>
        <thead className=''>
          <tr>
            <th className='text_color' scope="col">Id</th>
            <th className='text_color' scope="col">{ctx.lang.cart.photo}</th>
            <th className='text_color' scope="col">{ctx.lang.cart.title}</th>
            <th className='text_color' scope="col">{ctx.lang.cart.price}</th>
            <th className='text_color' scope="col">{ctx.lang.cart.Summary}</th>
            <th className='text_color' scope="col">{ctx.lang.cart.quantity}</th>
            <th className='text_color' scope="col">{ctx.lang.cart.delete}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any, i) => (
            <tr>
              <th className='text_color' scope="row">{item.id}</th>
              <td className='text_color'><img src={item.image} width="50" alt="" /></td>
              <td className='text_color'>{item.title}</td>
              <td className='text_color'>{item.price}$</td>
              <td className='text_color' >{(item.price * item.quantity).toFixed(2)} $</td>
              <td className='text_color' >

                <button className='btn btn-success'
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <span className='mx-2'>{item.quantity} x {item.name} </span>
                <button className='btn btn-warning'
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
              </td>
              <td><button className='btn btn-danger' onClick={() =>{notify(removeItem(item.id))}}>&times;</button>
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
      <h4 className='text-end text_color'>Total Price: {cartTotal.toFixed(2)}$</h4>
      <div className='d-flex justify-content-end py-2'>
         <button  className='btn btn-outline-success me-4' onClick={checkOut}>Checkout</button>
        <button onClick={emptyCart} className="btn btn-outline-danger ">{ctx.lang.cart.clear}</button>
      </div>
    </div>
  )
}

export default Cart;