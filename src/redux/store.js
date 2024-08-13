import { createStore } from "redux";
import rootReducer from "./reducers"; // Ensure this points to your root reducer

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // This is optional for Redux DevTools
);

export default store;
