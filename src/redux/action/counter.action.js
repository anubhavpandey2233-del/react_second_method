import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionTypes"

export const increment = (data) => (dispatch) => {

    dispatch({ type: INCREMENT_COUNTER })

}
export const decrement = (data) => (dispatch) => {

    dispatch({ type: DECREMENT_COUNTER })

}