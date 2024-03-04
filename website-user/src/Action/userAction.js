import 
{LOGIN_REQUEST,
LOGIN_SUCCESS,
LOGIN_FAIL

} from "../Constants/userConstants"

import axios from "axios"

export const login = (email, password) => async (dispatch) =>{
    try {
        dispatch({type: LOGIN_REQUEST})
        const config = {headers: {"Content-Type": "application/json"}}
        const {data} = await axios.post('https://fakestoreapi.com/auth/login', {email, password}, config )
        dispatch({type: LOGIN_SUCCESS, payload: data.user})
    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error.message})
    }
}