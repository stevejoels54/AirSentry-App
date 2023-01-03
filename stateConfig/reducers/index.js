import initialState from "../initialState";
import appActions from "../actions";

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case appActions.GET_CONDITION_VALUES_REQUEST:
      return {
        ...state,
        conditionValuesLoading: true,
      };
    case appActions.GET_CONDITION_VALUES_SUCCESS:
      return {
        ...state,
        conditionValuesLoading: false,
        conditionValuesSuccess: action.payload,
      };
    case appActions.GET_CONDITION_VALUES_ERROR:
      return {
        ...state,
        conditionValuesLoading: false,
        conditionValuesError: action.payload,
      };
    case appActions.GET_TREND_VALUES_REQUEST:
      return {
        ...state,
        trendValuesLoading: true,
      };
    case appActions.GET_TREND_VALUES_SUCCESS:
      return {
        ...state,
        trendValuesLoading: false,
        trendValuesSuccess: action.payload,
      };
    case appActions.GET_TREND_VALUES_ERROR:
      return {
        ...state,
        trendValuesLoading: false,
        trendValuesError: action.payload,
      };
    default:
      return state;
  }
};

export default appReducers;
