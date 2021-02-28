import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers, { AppState } from "./reducers";

const store = (preloadedState = {}) => {
  const middlewares = [thunk];
  const middlwareEnhancers = applyMiddleware(...middlewares);

  const enhancers = [middlwareEnhancers];
  const composedEnhancers = composeWithDevTools(...enhancers);

  return createStore(reducers, preloadedState, composedEnhancers);
};

export type { AppState };
export default store;
