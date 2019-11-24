import exampleReducer from "./exampleReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  example: exampleReducer
});

export default allReducer;
