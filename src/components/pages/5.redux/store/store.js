import { createStore, combineReducers } from "redux";
import { AhorrosReducer } from "../reducers/AhorrosReducer";

const reducers = combineReducers({
  ahorros: AhorrosReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
