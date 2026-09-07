import { ADD_TO_CART, INCREMENT_QTY } from "../ActionTypes";


export const addToCart = (id,price) => (dispatch) => {
    console.log(id);

    dispatch({ type: ADD_TO_CART, payload: {id,price} })
    
    
}

export const incrementQty=(id)=>(dispatch)=>{
    dispatch({type:INCREMENT_QTY,payload:id})
}