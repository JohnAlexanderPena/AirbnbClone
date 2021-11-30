import { createStore, combineReducers } from "redux";
import searchReducer from "./reducers/search";

const rootReducer = combineReducers({
  search: searchReducer,
});
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
