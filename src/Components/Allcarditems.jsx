import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const Allcarditems = () => {
  return (
    <>
    <div className='flex bg-red-400 items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5'>
         <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
            <div className='w-[15%]'>
                <img className='object-cover' src='https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UL960_FMwebp_QL65_.jpg' />
            </div>
            <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
             <h1 className='text-xl font-semibold text-slate-700'>Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)</h1>
             <h1 className='text-base text-slate-700 font-medium'>FREE delivery on $35 shipped by Amazon.This title will be released</h1>
             <div className='flex items-center justify-between'>
            <p className='font-bold text-lg text-green-600'>$32.45</p>
            <div className='text-red-800 bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>
                <AiFillDelete />
            </div>
             </div>
            </div>
         </div>
         
         <hr />
    </div>
    
    </>
  )
}

export default Allcarditems