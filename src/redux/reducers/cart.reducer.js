import { ADD_TO_CART, DECREMENT_QTY, INCREMENT_QTY,REMOVE_PRODUCT } from "../ActionTypes";

const initialStates = {
    cart: []
}
export const cartReducer = (state = initialStates, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.payload);

            // console.log(state.cart);

            let cartData = [...state.cart]
            console.log(cartData);

            let index = cartData.findIndex((v) => v.pid === action.payload.id)
            console.log(index);

            if (index === -1) {
                cartData.push({ pid: action.payload.id, qty: 1, price: action.payload.price })
            } else {
                cartData[index].qty += 1
            }


            console.log(cartData);


            console.log({ pid: action.payload.id, qty: 1, price: action.payload.price });

            return {
                cart: cartData
            }

        case INCREMENT_QTY:
            let cartDataa1 = [...state.cart]
            console.log(cartDataa1);

            let index1 = cartDataa1.findIndex((v) => v.pid === action.payload)
            console.log(index1);

            cartDataa1[index1].qty++;

            return {
                cart: cartDataa1
            }

        case DECREMENT_QTY:
            let cartDataa2 = [...state.cart]
            console.log(cartDataa2);

            let index2 = cartDataa2.findIndex((v) => v.pid === action.payload)
            console.log(index2);

            cartDataa2[index2].qty--;

            return {
                cart: cartDataa2
            }

        case REMOVE_PRODUCT:
            let cartDataa3 = [...state.cart]
            console.log(cartDataa3);

            let filterData = cartDataa3.filter((v) => v.pid !== action.payload)

            return {
                cart: filterData
            }


        default:
            return state
    }

}