// simple component to display the home screen
import React from "react";
import { isEmpty } from "lodash";
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import ValuesCard from "../components/valuesCard";
import CurrentDate from "../components/currentDate";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import appActions from "../stateConfig/actions";
import { useState } from "react";
import moment from "moment";

// get the current date in format "2023-01-02T21:09:45.499927Z"
const currentDate = moment().toISOString();
const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.conditionValuesSuccess);
  const loading = useSelector((state) => state.conditionValuesLoading);
  const error = useSelector((state) => state.conditionValuesError);

  useEffect(() => {
    if (isEmpty(data)) {
      dispatch(appActions.getConditionValues());
    }
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(appActions.getConditionValues());
  };

  return (
    <View style={styles.container}>
      {loading && !refreshing ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
        >
          <CurrentDate />
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={isEmpty(data) ? "Air" : data?.air?.name}
              value={isEmpty(data) ? "0" : data?.air?.comment}
              comment={isEmpty(data) ? "No data" : data?.air?.comment}
              updated={isEmpty(data) ? currentDate : data?.reading?.timestamp}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={
                isEmpty(data) ? "Temperature" : data?.temperature?.name
              }
              value={isEmpty(data) ? "0" : data?.temperature?.value}
              comment={isEmpty(data) ? "No data" : data?.temperature?.comment}
              updated={isEmpty(data) ? currentDate : data?.reading?.timestamp}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={isEmpty(data) ? "Humidity" : data?.humidity?.name}
              value={isEmpty(data) ? "0" : data?.humidity?.value}
              comment={isEmpty(data) ? "No data" : data?.humidity?.comment}
              updated={isEmpty(data) ? currentDate : data?.reading?.timestamp}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  cardcontainer: {
    flex: 1,
    direction: "column",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
