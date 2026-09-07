import { combineReducers } from "redux";
import { reducerCounter } from "./counter.reducer";
import { productReducer } from "./product.reducer";
import { cartReducer } from "./cart.reducer";


export const rootReducer = combineReducers({
    counter: reducerCounter,
    product:productReducer,
    cart:cartReducer
})