import productReducer from "./products/reducer"
import {combineReducers} from "redux";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
    productAll: productReducer,
    shoppingCart: cartReducer
})

export default rootReducer