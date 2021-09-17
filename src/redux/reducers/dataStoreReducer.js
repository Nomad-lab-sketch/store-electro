import {API} from "../../dal/api";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    phone: null,
    email: null,
    index: null,
    street: null,
}

const dataStoreReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data
            }
        default: return state
    }
}
export const setStoreData = (email, index, phone, street) => ({type:SET_USER_DATA,
data : {email, index, phone, street}});

export const dataStoreThunk = () => {
      return (dispatch) => {
          API.getDataStore()
              .then((data) => {
                  let { email, index, phone, street } = data.data;
                  dispatch(setStoreData(email, index, phone, street))

          })
      }
}

export default dataStoreReducer