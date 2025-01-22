import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { useSelector } from 'react-redux';

const Carditem = () => {
  const { id } = useParams(); // Getting ID from URL
  console.log(id);
  
  const { products } = useSelector((state) => state.Cardreducer); // Fetch products from Redux
  const singleproduct = products.find((item) => item.id === parseInt(id)); // Find product by ID

console.log(singleproduct);

  if (!singleproduct) {
    return <Spinner />;
  }


  return (
    <div className='md:mt-20 mt-44 md:w-[70%] flex h-full justify-between items-center m-auto p-[10%]'>
      <img className='object-contain w-[40%] h-[80%]' src={singleproduct.thumbnail} alt={singleproduct.title} />
      <div className='w-[50%]'>
        <h1 className='text-2xl mb-3'>{singleproduct.title}</h1>
        <p className='mb-3'>{singleproduct.description}</p>
        <div>
          <p className='mb-3'>${singleproduct.price}</p>
          <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
        </div>
      </div>
    </div>
  ) 
};

export default Carditem;
