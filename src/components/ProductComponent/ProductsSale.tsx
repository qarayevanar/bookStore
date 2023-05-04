import SingleCard from '../Home/SingleCard'
import productlist from '../../data/productData'


const ProductsSale = () => {
  return (
    
        <div className="container ">
            <div className="row g-4 ">
                {productlist.slice(7,11).map((item, i) => {
                    return <SingleCard key={i} id={item.id} title={item.title} category={item.category} image={item.image} author={item.author} price={item.price} desc={""}  />
                })}
            </div>
        </div>
  )
}

export default ProductsSale