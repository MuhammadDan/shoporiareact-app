import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Product = () => {
  // const {cart} = useSelector((state)=>state);
  return (
    <div className='bg-red-500 h-full w-full p-10 md:pt-[5%] flex flex-wrap justify-center items-center'>
      <Link to='/Carditem' className='bg-blue-500 md:mr-7 mb-7 card  pl-7 pr-7 w-[75%] md:w-[18%] md:h-[50vh] border shadow rounded-lg flex flex-col justify-center items-center'>
        <div className='text-xl'>
        <h1>Onyx Storm ...</h1>
      </div>
      <div>
        <p>FREE delivery on ....</p>
      </div>
      <div className='hover:scale-110 mb-3 w-full h-[65%] bg-red-500 bg-contain bg-no-repeat bg-center'>
        <img className='h-full w-full' src='https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UL960_FMwebp_QL65_.jpg' />
      </div>
      <div>
        <p>$32.99</p>
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
  )
}

export default Product