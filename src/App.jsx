import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Carditem from "./Components/Carditem";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Carditem/:id" element={<Carditem />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;

// how to import API data from repid API
// import axios from "axios";
// import { useEffect, useState } from "react";

// const options = {
//   method: 'GET',
//   url: 'https://ecommerce-api3.p.rapidapi.com/malefootwear',
//   headers: {
//     'x-rapidapi-key': 'effeee6739msh22402ce7a65aabfp1468a3jsn8110955ff80a',
//     'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
//   }
// };
// function App() {
//   const [ecomerce, setecomerce] = useState(null)
//   const callingfun = async()=>{
//     try {
//       const response = await axios.request(options);
//       setecomerce(response.data)
//       console.log(response.data);
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
