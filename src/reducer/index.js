import weatherReducer from "./weather";
import { combineReducers } from "redux";
import searchReducer from "./search";


const AllReducers = combineReducers({
    weather:weatherReducer,
    search:searchReducer
})


export default AllReducers;