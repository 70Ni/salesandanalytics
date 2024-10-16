import { combineReducers } from "redux";

import counterReducer from "./reducers";
import orderData from "./orderfilter";
import productData from "./productRedux";
import graphData from "./graphReducer";

const rootreducer = combineReducers({
  searchdata: counterReducer,
  orderData: orderData,
  productData: productData,
  graphData: graphData,
});

export default rootreducer;
