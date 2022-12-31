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

const HomeScreen = ({ navigation }) => {
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
              condition={data?.air?.name}
              value={data?.air?.comment}
              comment={data?.air?.comment}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={data?.temperature?.name}
              value={data?.temperature?.value}
              comment={data?.temperature?.comment}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={data?.humidity?.name}
              value={data?.humidity?.value}
              comment={data?.humidity?.comment}
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
