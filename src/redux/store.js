import {rootReducer} from "./reducer/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";
import logger from "redux-logger";
import {compose, createStore, applyMiddleware} from "redux";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [logger, sagaMiddleware];
/*istanbul ignore next */
if (process.env.NODE_ENV === `development`) {
  middleWares.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);
store.asyncReducers = {};

export default store;
