import * as types from '../actionTypes';

const initialState = {
    cart:[],
    userName: "ABC"
}

export const productReducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case types.ADD_PRODUCT:{
        return { ...state, cart: [...state.cart, payload],  userName: payload.brand}
    }
    case types.REMOVE_PRODUCT: {
        let cloneState = {...state}
        cloneState.cart = cloneState.cart.filter(item => item.id !== payload.id)
        return cloneState
    }
    
    default:
        return state
    }
}
