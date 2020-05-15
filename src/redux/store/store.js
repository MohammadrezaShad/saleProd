import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "../rootReducer";
import {persistStore} from 'redux-persist'
const middleware=[]


const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)) )
export const presistor=persistStore(store)
export default store