import React, { useEffect, useState } from 'react';
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import electronics_banner_1 from "../assets/electronics-banner-1.jpg";
import mens_banner from "../assets/mens-banner.jpg";
import womens_banner from "../assets/womens-banner.jpg";
import { RxDotFilled } from 'react-icons/rx';

const SliderProduct = () => {
    const slides = [
        { id: 1, pic: banner1 },
        { id: 2, pic: banner2 },
        { id: 3, pic: banner3 },
        { id: 4, pic: banner4 },
        { id: 5, pic: banner5 },
        { id: 6, pic: electronics_banner_1 },
        { id: 7, pic: mens_banner },
        { id: 8, pic: womens_banner }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    // automatic slide change
    useEffect(() => {
      const interval =setInterval(()=>{
        setCurrentIndex((prevIndex)=>prevIndex === slides.length - 1 ? 0 : prevIndex + 1)
      },3000);
    
      return () => clearInterval(interval);
    }, [slides.length])
    

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };
   const goToSlide = (slideindex)=>{
    setCurrentIndex(slideindex)
   }
    return (
        <>
        <div className='w-full md:w-[1020px] mx-auto mt-20  px-4 relative'>
            <div className='md:w-[1000px] bg-cover flex items-center justify-center'>
                <img
                    src={slides[currentIndex].pic}
                    alt={`Slide ${currentIndex + 1}`}
                    className='w-full h-auto rounded-2xl'
                />
            </div>
            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className='absolute top-14 md:top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
            >
                &#8592;
            </button>
            <button
                onClick={handleNext}
                className='absolute top-14 md:top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
            >
                &#8594;
            </button>
            <div className='flex  justify-center '>
           {
            slides.map((slide,slideindex)=>(
                <div key={slideindex} onClick={()=>(goToSlide(slideindex))} className={`text-2xl cursor-pointer ${
                    currentIndex === slideindex ? "text-black-500" : "text-gray-500"
                  } hover:text-blue-700`}><RxDotFilled /></div>
            ))
           }
            </div>
        </div>
        </>
    );
};

export default SliderProduct;