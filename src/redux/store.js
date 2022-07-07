import {rootReducer} from "./reducer/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import {compose, createStore, applyMiddleware} from "redux";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const {logger} = require(`redux-logger`);

  middleWares.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);
store.asyncReducers = {};

export default store;
