import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Allcarditems from "../Components/Allcarditems";

const Cart = () => {
  // const {cart} = useSelector((state)=>state);
  // const [totalAmount, settotalAmount] = useState(0);
  // useEffect(() => {
  //   settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))
  // }, [cart])

  return (
    <>
      <div className="mt-16">
        <div className="w-full h-screen mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-[60%] flex flex-col p-2">
            <Allcarditems />
          </div>
          <div className="w-full md:w-[40%] mt-5 flex flex-col">
            <div className="flex flex-col p-5 gap-5 my-14 h-full justify-between">
              <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-xl text-green-800">
                  YOUR CART
                </h1>
                <h1 className="font-semibold text-5xl text-green-800">
                  SUMMARY
                </h1>
                <p className="text-xl text-gray-700 font-semibold">
                  Total items: 1
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl">
                <span className="text-gray-700 font-semibold">
                  Total Amount:
                </span>{" "}
                25000
              </p>
              <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
