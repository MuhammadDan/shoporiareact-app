import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Allcarditems from "../Components/Allcarditems";

const Cart = () => {
  const {products} = useSelector((state)=>state.Cardreducer)
  console.log(products);
  const [Totalamount, setTotalamount] = useState(0);
  useEffect(()=>{
    setTotalamount(products.reduce((acc,curr)=>acc+curr.price,0));
  },[products])
  return (
    <>
      <div className="mt-16">
        {products.length > 0 ? (
          <div className="w-full h-screen mx-auto flex flex-col md:flex-row justify-center">
            <div className="w-full md:w-[60%] flex flex-col p-2">
              {products.map((item, index) => {
                return (
                  <Allcarditems key={item.id} item={item} itemIndex={index} />
                );
              })}
            </div>
            <div className="w-full md:w-[40%] mt-2 flex flex-col">
              <div className="flex flex-col p-5 gap-5 my-8 h-full justify-between">
                <div className="flex flex-col gap-5">
                  <h1 className="font-semibold text-xl text-green-800">
                    YOUR CART
                  </h1>
                  <h1 className="font-semibold text-4xl text-green-800">
                    SUMMARY
                  </h1>
                  <p className="text-xl text-gray-700 font-semibold">
                    Total items: {products.length}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-xl">
                  <span className="text-gray-700 font-semibold">
                    Total Amount:
                  </span>{" "}
                  $ {Totalamount}
                </p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-screen mx-auto flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl text-gray-700">
              Your Cart is Empty{" "}
            </h1>
            <Link to="/">
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
