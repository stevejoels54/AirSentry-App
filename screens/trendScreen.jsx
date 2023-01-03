import React from "react";
import { isEmpty } from "lodash";
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import appActions from "../stateConfig/actions";
import { useState } from "react";
import AirChart from "../components/airChart";
import TemperatureChart from "../components/temperatureChart";
import HumidityChart from "../components/humidityChart";

const TrendScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.trendValuesSuccess);
  const loading = useSelector((state) => state.trendValuesLoading);
  const error = useSelector((state) => state.trendValuesError);

  useEffect(() => {
    if (isEmpty(data)) {
      dispatch(appActions.getTrendValues());
    }
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(appActions.getTrendValues());
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
          <View style={styles.cardcontainer}>
            <AirChart days={data?.air?.days} values={data?.air?.values} />
          </View>
          <View style={styles.cardcontainer}>
            <TemperatureChart
              days={data?.temperature?.days}
              values={data?.temperature?.values}
            />
          </View>
          <View style={styles.cardcontainer}>
            <HumidityChart
              days={data?.humidity?.days}
              values={data?.humidity?.values}
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
  text: {
    fontSize: 30,
  },
});

export default TrendScreen;
