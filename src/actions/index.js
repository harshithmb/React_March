import * as types from '../actionTypes'

export const addProduct = (payload) => ({
    type: types.ADD_PRODUCT,
    payload
})


export const removeProduct = (payload) => {
    return({
    type: types.REMOVE_PRODUCT,
    payload
})}

export function addProductAPI(data){
  return function(dispatch){
    //API
    setTimeout(()=> dispatch(addProduct(data)), 5000)
  }
}