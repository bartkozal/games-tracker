import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import state from ".";

const middlewares = [thunk];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true
  });

  middlewares.push(logger);
}

const store = createStore(state, applyMiddleware(...middlewares));

export default store;
