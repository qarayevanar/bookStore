import SingleCard from "./SingleCard";
import productlist from "../../data/productData";



const Products = () => {
    return (
        <div className="container my-3">
            <div className="row g-4 ">
                {productlist.slice(0,4).map((item, i) => {
                    return <SingleCard key={i} id={item.id} title={item.title} category={item.category} image={item.image} author={item.author} price={item.price} desc={""}  />
                })}
            </div>
        </div>
    )
}

export default Products;