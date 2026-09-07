import { GET_PRODUCTS } from "../ActionTypes"

export const getProductt = () => async (dispatch) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const rdata = await response.json()
        console.log(rdata);

        dispatch({ type: GET_PRODUCTS, payload: rdata })
    } catch (error) {
        console.log("error");
    }

}