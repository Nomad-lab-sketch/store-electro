import {API} from "../../dal/api";
const SET_PRODUCTS_DATA = "SET_PRODUCTS_DATA"
let initialState = {
    laptops: []
}

const lapTopsReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_PRODUCTS_DATA:
            return {
                ...state,
                ...action.action
            }
        default:
            return state
    }
}

export const setLaptopsData = (laptops) => ({type: SET_PRODUCTS_DATA, action: laptops})

export const dataLaptopsThunk = () =>  {
    return (dispatch) => {
        API.getLaptops().then((dataLaptops) => {
            dispatch(setLaptopsData(dataLaptops))
        })
    }
}

export default lapTopsReducer