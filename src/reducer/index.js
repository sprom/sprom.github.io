import weatherReducer from "./weather";
import { combineReducers } from "redux";


const AllReducers = combineReducers({
    weather:weatherReducer
})


export default AllReducers;