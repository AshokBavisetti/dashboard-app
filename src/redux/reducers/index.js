import { combineReducers } from "redux";
import dataReducer from "./dataReducer"; // Make sure the path is correct

const rootReducer = combineReducers({
  data: dataReducer, // This key should match the data structure you're accessing in your components
});

export default rootReducer;
