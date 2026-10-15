import { ADD_USER_DATA, REMOVE_USER, UPDATE_USER } from "../ActionTypes";

export const adduser = (data) => (dispatch) => {
    try {
        dispatch({ type: ADD_USER_DATA, payload: data })
    } catch (error) {
        console.log("error in form.action");

    }

}

export const removeruser = (id) => (dispatch) => {
    try {
        console.log(id);
        
        dispatch({type: REMOVE_USER, payload:id})
        
    } catch (error) {
        console.log("error in removeuser");
    }
}

export const updateUser=(id)=>(dispatch)=>{
    try {
        console.log(id);
        
        dispatch({type:UPDATE_USER,payload:id})
    } catch (error) {
        console.log("error in updateuser");
        
    }
}