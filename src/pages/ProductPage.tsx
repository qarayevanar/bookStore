import { Helmet } from "react-helmet";
import SingleCard from "../components/Home/SingleCard";
import ProductHead from "../components/ProductComponent/ProductHead";
import productlist from "../data/productData";
import { useState } from "react";



const Products = () => {

    const [data,setData] = useState(productlist)


    const filterResultall = (cartItem:any) => {
        const result = productlist.filter((fdata)=>{
            return fdata.category1 === cartItem 
        });
        setData(result)
    }


    const filterResult = (cartItem:any) => {
        const result = productlist.filter((fdata)=>{
            return fdata.category === cartItem 
        });
        setData(result)
    }


    return (
        
        <div className="container-fluid">
            <Helmet>
        <title>Products</title>
    </Helmet>
            <ProductHead />
            <div className="container my-5">
            <div className="row g-4 ">
                    <div className="col-md-2 mt-5">
                    <div  className="mt-5">
                        <h4 className="text_color text-center">Categories</h4>
                    <div className="d-flex flex-column ">
                    <button className="btnfilter"  onClick={()=>{filterResultall('all')}}><span className="text">All Category</span></button>
                    <button className="btnfilter" onClick={()=>{filterResult('Detective')}}><span className="text">Detective</span></button>
                    <button className="btnfilter" onClick={()=>{filterResult('Horror thriller')}}><span className="text">Horror thriller</span></button>
                    <button className="btnfilter" onClick={()=>{filterResult('Novel')}}><span className="text">Novel</span></button>
                    <button className="btnfilter" onClick={()=>{filterResult('Biography')}}><span className="text">Biography</span></button>
                    <button className="btnfilter" onClick={()=>{filterResult('Science fiction')}}><span className="text">Science fiction</span></button>
                    </div>
                </div>
                    </div>
                <div className="col-md-10">
                    <div className="row">
                    {data.map((values) => {
                    const{id,title,category,image,author,price} = values;
                    return <SingleCard  id={id} title={title} category={category} image={image} author={author} price={price} desc={""}  />
                })}
                    </div>

                </div>

            </div>
        </div>
        </div>
    )
}

export default Products;