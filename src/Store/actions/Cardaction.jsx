import axios from "axios";
import { getproducts } from "../reducers/Cardreducer";

const options = {
  method: "GET",
  url: "https://real-time-amazon-data.p.rapidapi.com/products-by-category",
  params: {
    category_id: "2478868012",
    page: "1",
    country: "US",
    sort_by: "RELEVANCE",
    product_condition: "ALL",
    is_prime: "false",
    deals_and_discounts: "NONE",
  },
  headers: {
    "x-rapidapi-key": "effeee6739msh22402ce7a65aabfp1468a3jsn8110955ff80a",
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  },
};
export const asyncgetproducts = () => async (dispatch, getstate) => {
  try {
    const response = await axios.request(options);
    dispatch(getproducts(response.data.data.products));
    console.log(response.data.data.products);
  } catch (error) {
    console.error(error);
  }
};
