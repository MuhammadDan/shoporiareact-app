import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'

const Carditem = ({item,itemIndex}) => {
  return (
    <>
    <div className='md:mt-20 mt-44 md:w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
          <img className='object-contain w-[40%] h-[80%]' src='https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UL960_FMwebp_QL65_.jpg' />
         <div className='w-[50%]'> 
          <h1 className='text-2xl mb-3'>Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)</h1>
          <p className='mb-3'>FREE delivery on $35 shipped by Amazon.This title will be released on January 21, 2025.
          </p>
          <div>
            <p className='mb-3'>$32.99</p>
            <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
            <div><FcDeleteDatabase /></div>
          </div>
         </div>
    </div>
    </>
  )
}

export default Carditem