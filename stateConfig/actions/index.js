const appActions = {
  GET_CONDITION_VALUES_REQUEST: "GET_CONDITION_VALUES_REQUEST",
  GET_CONDITION_VALUES_SUCCESS: "GET_CONDITION_VALUES_SUCCESS",
  GET_CONDITION_VALUES_ERROR: "GET_CONDITION_VALUES_ERROR",

  getConditionValues: () => ({
    type: appActions.GET_CONDITION_VALUES_REQUEST,
  }),
};

export default appActions;
