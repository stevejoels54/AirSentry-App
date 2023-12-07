import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import appReducers from "../reducers";
import appSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSaga);

export default store;
