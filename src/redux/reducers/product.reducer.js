import { GET_PRODUCTS } from "../ActionTypes";

const initialStates = {
    product: [],
    isloading: false,
    Error: false
}
export const productReducer = (state = initialStates, action) => {
    console.log(action);
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                product: action.payload,
                isloading: false,
                Error: false
            }
        default:
            return state
    }
}