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
import { getComment } from "../helpers/commets";

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
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <CurrentDate />
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={"Air"}
              value={isEmpty(data) ? "0" : data?.air}
              comment={isEmpty(data) ? "No data" : getComment("air", data?.air)}
              updated={isEmpty(data) ? currentDate : data?.timestamp?.$date}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={"Temperature"}
              value={isEmpty(data) ? "0" : data?.temperature}
              comment={
                isEmpty(data)
                  ? "No data"
                  : getComment("temperature", data?.temperature)
              }
              updated={isEmpty(data) ? currentDate : data?.timestamp?.$date}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={"Humidity"}
              value={isEmpty(data) ? "0" : data?.humidity}
              comment={
                isEmpty(data)
                  ? "No data"
                  : getComment("humidity", data?.humidity)
              }
              updated={isEmpty(data) ? currentDate : data?.timestamp?.$date}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={"Co"}
              value={isEmpty(data) ? "0" : data?.co}
              comment={isEmpty(data) ? "No data" : getComment("co", data?.co)}
              updated={isEmpty(data) ? currentDate : data?.timestamp?.$date}
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
