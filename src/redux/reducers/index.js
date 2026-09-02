import { combineReducers } from "redux";
import { reducerCounter } from "./counter.reducer";


export const rootReducer = combineReducers({
    counter: reducerCounter
})