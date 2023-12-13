import { takeLatest, fork, put } from "redux-saga/effects";
import axios from "axios";
import appActions from "../actions";
import { API_URL, DEVICE_ID } from "@env";

function* getConditionValues() {
  try {
    const result = yield axios({
      method: "GET",
      url: `${API_URL}/readings/${DEVICE_ID}`,
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
      url: `${API_URL}/readings/averages/${DEVICE_ID}`,
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

function* getNotifications() {
  try {
    const result = yield axios({
      method: "GET",
      url: `${API_URL}/notifications/${DEVICE_ID}`,
    });
    yield put({
      type: appActions.GET_NOTIFICATIONS_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: appActions.GET_NOTIFICATIONS_ERROR,
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

function* watchGetNotificationsRequest() {
  yield takeLatest(appActions.GET_NOTIFICATIONS_REQUEST, getNotifications);
}

export default function* appSaga() {
  yield fork(watchGetConditionValuesRequest);
  yield fork(watchGetTrendValuesRequest);
  yield fork(watchGetNotificationsRequest);
}
