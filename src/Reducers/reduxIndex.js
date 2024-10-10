import { combineReducers } from "redux";
import counterReducer from "./reducers";

const rootreducer = combineReducers({
  searchdata: counterReducer,
});

export default rootreducer;
