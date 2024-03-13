import axios from "axios"
import {ADD_TO_CART} from "../Constants/cartConstants"


export const addItemsToCart = (productId, quantity) => async (dispatch, getState) =>{
    const {data} = await axios.get()
    dispatch({
        type: ADD_TO_CART,
        payload:{data}
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}