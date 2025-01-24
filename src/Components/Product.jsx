import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncgetproducts } from "../Store/actions/Cardaction";
import Spinner from "./Spinner";
import { add, remove } from "../Store/reducers/Cardreducer";
import { toast } from "react-toastify";


const Product = () => {
  const { allProducts, products } = useSelector((state) => state.Cardreducer); // Separate states
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
    toast.error("Item is removed")
  };

  const addToCart = (item) => {
    dispatch(add(item));
     toast.success("Thanks For Shopping")
  };

  useEffect(() => {
    dispatch(asyncgetproducts()); // Fetch products when component mounts
  }, [dispatch]);

  return allProducts ? (
    <div className="grid xs-gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl px-6 md:p-3 mx-auto space-y-10 space-x-5 min-h-[55vh]">
      {allProducts.map((item) => {
        // Check if the item is in the cart
        const inCart = products.some((product) => product.id === item.id);

        return (
          <Link
            to={`/Carditem/${item.id}`}
            key={item.id}
            className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in gap-3 p-6 md:p-4 mt-10 md:ml-5 rounded-xl shadow md:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          >
            <div>
              <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                {item.title}
              </p>
            </div>
            <div>
              <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                {item.description.split("").slice(0, 20).join("") + "..."}
              </p>
            </div>
            <div className="h-[180px]">
              <img
                className="h-full w-full"
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
            <div className="flex justify-between gap-2 md:gap-12 items-center w-full mt-5">
              <p className="text-green-600 font-semibold">${item.price}</p>
              {inCart ? (
                <button
                  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents navigation
                    removeFromCart(item.id);
                  }}
                >
                  Remove Item
                </button>
              ) : (
                <button
                  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents navigation
                    addToCart(item);
                  }}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  ) : (
    <Spinner />
  );
};

export default Product;