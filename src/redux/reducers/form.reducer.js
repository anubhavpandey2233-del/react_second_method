import { ADD_USER_DATA, REMOVE_USER, UPDATE_USER } from "../ActionTypes";

const initialStates = {
    userData: []
}

export const formReducer = (state = initialStates, action) => {
    console.log(action.payload, "ffffffffffff");
    switch (action.type) {
        case ADD_USER_DATA:
            return {
                userData: [...state.userData, action.payload]
            }

        case REMOVE_USER:

            let fData = state.userData.filter((v) => v.id != action.payload);

            console.log(fData);

            return {
                userData: fData
            }

        case UPDATE_USER:
            let fIndex = state.userData.findIndex((v) => v.id == action.payload);

            console.log(fIndex);

            let updatedData = [...state.userData];

            updatedData[fIndex] = action.payload

            return {
                userData:updatedData
            }

        default:
            return state;
    }

}