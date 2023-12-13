const appActions = {
  GET_CONDITION_VALUES_REQUEST: "GET_CONDITION_VALUES_REQUEST",
  GET_CONDITION_VALUES_SUCCESS: "GET_CONDITION_VALUES_SUCCESS",
  GET_CONDITION_VALUES_ERROR: "GET_CONDITION_VALUES_ERROR",

  GET_TREND_VALUES_REQUEST: "GET_TREND_VALUES_REQUEST",
  GET_TREND_VALUES_SUCCESS: "GET_TREND_VALUES_SUCCESS",
  GET_TREND_VALUES_ERROR: "GET_TREND_VALUES_ERROR",

  GET_NOTIFICATIONS_REQUEST: "GET_NOTIFICATIONS_REQUEST",
  GET_NOTIFICATIONS_SUCCESS: "GET_NOTIFICATIONS_SUCCESS",
  GET_NOTIFICATIONS_ERROR: "GET_NOTIFICATIONS_ERROR",

  getConditionValues: () => ({
    type: appActions.GET_CONDITION_VALUES_REQUEST,
  }),
  getTrendValues: () => ({
    type: appActions.GET_TREND_VALUES_REQUEST,
  }),
  getNotifications: () => ({
    type: appActions.GET_NOTIFICATIONS_REQUEST,
  }),
};

export default appActions;