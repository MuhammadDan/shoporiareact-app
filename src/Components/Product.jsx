import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncgetproducts } from "../Store/actions/Cardaction";
import Spinner from "./Spinner";

const Product = () => {
  // const {cart} = useSelector((state)=>state);
  const {products} = useSelector((state)=>state.Cardreducer)
  console.log(products); // yahan pai initialstate wali value dalo hamesha
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [])
  
  return products ? (
      <div className="grid xs-gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl px-6 md:p-3 mx-auto space-y-10 space-x-5 min-h-[55vh]">
     {products.map((item,index)=>(
      <Link key={index}
        to="/Carditem"
        className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in gap-3 p-6  md:p-4 mt-10 md:ml-5 rounded-xl shadow md:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      >
        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {item.title}
          </p>
        </div>
        <div>
          <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
            {item.description.split("").slice(0,20).join("")+"..."}
          </p>
        </div>
        <div className="h-[180px]">
          <img
            className="h-full w-full"
            src={item.thumbnail}/>
        </div>
        <div className="flex justify-between gap-2 md:gap-12 items-center w-full mt-5">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
            Add To Cart
          </button>
        </div>
        {/* {
      cart.some((p)=>p.id==post.id) ? (
        <button onClick={removeFromCart}>Remove Item</button>
      ):(
        <button onClick={AddToCart}>Add to cart</button>
      )
      } */}
      </Link>
    ))}
    </div>

  ) : (<Spinner />);
};

export default Product;
