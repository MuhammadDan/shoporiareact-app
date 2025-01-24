import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Store/reducers/Cardreducer";
import { toast } from "react-toastify";
const Carditem = () => {
  const { id } = useParams(); // Getting ID from URL
  // console.log(id);
  const dispatch = useDispatch();
  const { allProducts, products: cartItems } = useSelector(
    (state) => state.Cardreducer
  ); // Fetch products from Redux
  const singleProduct = allProducts.find((item) => item.id === parseInt(id)); // Find product by ID
  const inCart = cartItems.some((product) => product.id === parseInt(id));
  console.log(singleProduct);

  if (!singleProduct) {
    return <Spinner />;
  }
const handleAddToCart = ()=>{
  dispatch(add(singleProduct));
  toast.success("Thankyou For Shopping");
}
const handleRemoveFromCart = ()=>{
  dispatch(remove(singleProduct.id));
  toast.error("Item is removed");
}
  return (
    <div className="md:mt-20 mt-44 md:w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
      <img
        className="object-contain w-[40%] h-[80%]"
        src={singleProduct.thumbnail}
        alt={singleProduct.title}
      />
      <div className="w-[50%]">
        <h1 className="text-2xl mb-3">{singleProduct.title}</h1>
        <p className="mb-3">{singleProduct.description}</p>
        <div>
          <p className="mb-3">${singleProduct.price}</p>
          <button
            className={`${
              inCart ? "bg-red-500" : "bg-green-500"
            } text-white p-2 rounded-md`}
            onClick={() =>
              inCart ? handleRemoveFromCart() : handleAddToCart()
            }
          >
            {inCart ? "Remove Item" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carditem;
