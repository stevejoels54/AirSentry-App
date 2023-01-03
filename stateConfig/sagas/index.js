import { takeLatest, fork, put } from "redux-saga/effects";
import axios from "axios";
import appActions from "../actions";

function* getConditionValues() {
  try {
    const result = yield axios({
      method: "GET",
      url: "http://localhost:8000/current/",
    });
    yield put({
      type: appActions.GET_CONDITION_VALUES_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: appActions.GET_CONDITION_VALUES_ERROR,
      payload: error,
    });
  }
}

function* getTrendValues() {
  try {
    const result = yield axios({
      method: "GET",
      url: "http://localhost:8000/trends/",
    });
    yield put({
      type: appActions.GET_TREND_VALUES_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: appActions.GET_TREND_VALUES_ERROR,
      payload: error,
    });
  }
}

function* watchGetConditionValuesRequest() {
  yield takeLatest(appActions.GET_CONDITION_VALUES_REQUEST, getConditionValues);
}

function* watchGetTrendValuesRequest() {
  yield takeLatest(appActions.GET_TREND_VALUES_REQUEST, getTrendValues);
}

export default function* appSaga() {
  yield fork(watchGetConditionValuesRequest);
  yield fork(watchGetTrendValuesRequest);
}
