import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import { CartReducer } from "./cart/cart.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";


const presistConfig={
    key:'root',
    storage,
    whitelist:['cartToggle']
}

const rootReducer=combineReducers({
    user:userReducer,
    cartToggle:CartReducer,
    directory:directoryReducer,
    shop:shopReducer
})
export default persistReducer(presistConfig,rootReducer)