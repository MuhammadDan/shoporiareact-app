import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Carditem from './Components/Carditem'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path="/Carditem" element={<Carditem />} />
      </Routes>
    </div>
  )
}

export default App










// how to import API data from repid API
// import axios from "axios";
// import { useEffect, useState } from "react";

// const options = {
//   method: "GET",
//   url: "https://real-time-amazon-data.p.rapidapi.com/products-by-category",
//   params: {
//     category_id: "2478868012",
//     page: "1",
//     country: "US",
//     sort_by: "RELEVANCE",
//     product_condition: "ALL",
//     is_prime: "false",
//     deals_and_discounts: "NONE",
//   },
//   headers: {
//     "x-rapidapi-key": "effeee6739msh22402ce7a65aabfp1468a3jsn8110955ff80a",
//     "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
//   },
// };
// function App() {
//   const [ecomerce, setecomerce] = useState(null)
//   const callingfun = async()=>{
//     try {
//       const response = await axios.request(options);
//      setecomerce(response.data.data.products)
//       console.log(response.data.data.products);
//     } catch (error) {
//       console.error(error);
//     }
//   }   
//   useEffect(() => {
  
//   callingfun();
   
//   }, [])
  
//   return (
//     <>
//       <ul>
//         { ecomerce && 
//           ecomerce.map((item)=>{
//             return <li>{item.product_title}</li>
//           })
//         }
//       </ul>
//     </>
//   );
// }

// export default App;
