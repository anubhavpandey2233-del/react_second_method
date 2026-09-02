import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../ActionTypes";

const InitialStates = {
    count: 0
}

export const reducerCounter = (state = InitialStates, action) => {

    console.log(action);

    switch (action.type) {
        case INCREMENT_COUNTER:
            return { count: state.count + 1 }

        case DECREMENT_COUNTER:
            return { count: state.count - 1 }

        default:
            return state
    }

}