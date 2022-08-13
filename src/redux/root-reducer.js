import { combineReducers } from "redux";
import postReducers from "./reducer";

const rootReducer = combineReducers({
  data: postReducers,
});

export default rootReducer;
