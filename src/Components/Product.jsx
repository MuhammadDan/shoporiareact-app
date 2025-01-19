import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncgetproducts } from "../Store/actions/Cardaction";

const Product = () => {
  // const {cart} = useSelector((state)=>state);
  const {products} = useSelector((state)=>state.Cardreducer)
  console.log(products); // yahan pai initialstate wali value dalo hamesha
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncgetproducts());
  }, [])
  
  return (
    <div className="grid xs-gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl px-6 md:p-3 mx-auto space-y-10 space-x-5 min-h-[55vh]">
    <Link
      to="/Carditem"
      className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in gap-3 p-6  md:p-4 mt-10 md:ml-5 rounded-xl outline shadow md:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          Onyx Storm ...
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          FREE delivery on ....
        </p>
      </div>
      <div className="h-[180px]">
        <img
          className="h-full w-full"
          src="https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UL960_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="flex justify-between gap-2 md:gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">$32.99</p>
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
   
  </div>

    // <div className="h-full w-full p-10 md:pt-[5%] flex flex-wrap justify-center items-center">
    //   <Link
    //     to="/Carditem"
    //     className="md:mr-7 mb-7 card  pl-7 pr-7 w-full h-[60vh] md:w-[18%] md:h-[52vh] hover:scale-110 transition duration-300 ease-in shadow md:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg flex flex-col justify-center items-center"
    //   >
    //     <div className="text-xl">
    //       <h1 className="text-gray-700 font-semibold text-left truncate w-40 pt-3">
    //         Onyx Storm ...
    //       </h1>
    //     </div>
    //     <div>
    //       <p className="w-40 text-gray-400 font-normal text-[12px] text-left">
    //         FREE delivery on ....
    //       </p>
    //     </div>
    //     <div className="mb-3 w-full h-[65%] bg-red-500 bg-contain bg-no-repeat bg-center">
    //       <img
    //         className="h-full w-full"
    //         src="https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UL960_FMwebp_QL65_.jpg"
    //       />
    //     </div>
    //     <div className="flex justify-between gap-6 items-center w-full">
    //       <p className="text-green-600 font-semibold">$32.99</p>
    //       <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] md:text-[9px] p-1 px-2 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
    //         Add To Cart
    //       </button>
    //     </div>
    //     {/* {
    //   cart.some((p)=>p.id==post.id) ? (
    //     <button onClick={removeFromCart}>Remove Item</button>
    //   ):(
    //     <button onClick={AddToCart}>Add to cart</button>
    //   )
    //   } */}
    //   </Link>
      
    // </div>
  );
};

export default Product;
