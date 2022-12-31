import { takeLatest, fork, put } from "redux-saga/effects";
import axios from "axios";
import appActions from "../actions";

function* getConditionValues() {
  try {
    const result = yield axios({
      method: "GET",
      //   url: "https://stevejoels.pythonanywhere.com/get_locations",
      url: "http://localhost:8000/current/",
    });
    yield put({
      type: appActions.GET_CONDITION_VALUES_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: appActions.GET_CONDITION_VALUES_ERROR,
      payload: error.data,
    });
  }
}

function* watchGetConditionValuesRequest() {
  yield takeLatest(appActions.GET_CONDITION_VALUES_REQUEST, getConditionValues);
}

export default function* appSaga() {
  yield fork(watchGetConditionValuesRequest);
}
