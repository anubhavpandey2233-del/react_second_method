import { ADD_TO_CART, DECREMENT_QTY, INCREMENT_QTY } from "../ActionTypes";


export const addToCart = (id,price) => (dispatch) => {
    console.log(id);

    dispatch({ type: ADD_TO_CART, payload: {id,price} })
    
    
}

export const incrementQty=(id)=>(dispatch)=>{
    dispatch({type:INCREMENT_QTY,payload:id})
}
export const decrementtQty=(id)=>(dispatch)=>{
    dispatch({type:DECREMENT_QTY,payload:id})
}