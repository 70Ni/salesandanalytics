import { combineReducers } from "redux";
import counterReducer from "./reducers";
import orderData from "./orderfilter";

const rootreducer = combineReducers({
  searchdata: counterReducer,
  orderData: orderData,
});

export default rootreducer;
