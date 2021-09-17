import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import dataStoreReducer from "./reducers/dataStoreReducer";
import lapTopsReducer from "./reducers/laptopsReducer";


let reducers = combineReducers({
   dataStore: dataStoreReducer,
   laptops: lapTopsReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store

window.store = store