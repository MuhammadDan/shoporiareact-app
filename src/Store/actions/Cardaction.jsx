import axios from "axios";
import { getproducts } from "../reducers/Cardreducer";

export const asyncgetproducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    dispatch(getproducts(response.data.products)); // Update only fetched products
    console.log(response.data.products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};












// rapid api sai api liya tha likn uska free access na milnai pai chordiya
// import axios from "axios";
// import { getproducts } from "../reducers/Cardreducer";

// const options = {
//   method: 'GET',
//   url: 'https://ecommerce-api3.p.rapidapi.com/malefootwear',
//   headers: {
//     'x-rapidapi-key': 'effeee6739msh22402ce7a65aabfp1468a3jsn8110955ff80a',
//     'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
//   }
// };

// export const asyncgetproducts = () => async (dispatch, getstate) => {
//   try {
//     const response = await axios.request(options);
//     dispatch(getproducts(response.data))
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
//   // try {
//   //   const response = await axios.request(options);
//   //   dispatch(getproducts(response.data.data.products));
//   //   // console.log(response.data.data.products);
//   // } catch (error) {
//   //   console.error(error);
//   // }
// };
