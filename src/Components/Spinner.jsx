import React from "react";
const Spinner = () => {
  return (
    /* From Uiverse.io by devAaus */
    // <div class="flex-col gap-4 w-full flex items-center justify-center">
    //   <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
    //     <div class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
    //   </div>
    // </div>
    <div className='w-full h-full justify-center items-center flex'>
    <h1 className='text-6xl'>Loading...</h1>
</div>
  );
};

export default Spinner;
