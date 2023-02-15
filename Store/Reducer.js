const InitialValues = {
    cart: [],
    counter: 0
}
const CartReducer = (state = InitialValues, action) => {
    switch (action.type) {
        case "ADD_TO_FAV":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "REMOVE":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case "CHANGECOUNT":
            return {
                ...state,
                counter: action.payload
            }
        default:
            return state

    }
};
export default CartReducer;