import { createStore, applyMiddleware } from "redux";
import yourReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  yourReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
