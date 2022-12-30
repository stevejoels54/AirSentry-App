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
  const values = useSelector((state) => state.values);
  const loading = useSelector((state) => state.conditionValuesLoading);
  const error = useSelector((state) => state.conditionValuesError);

  useEffect(() => {
    if (isEmpty(values)) {
      dispatch(appActions.getConditionValues());
    }
  }, [values]);

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
              condition={"Air"}
              value={"Healthy"}
              comment={"Healthy"}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard
              condition={"Temperature"}
              value={24}
              comment={"Normal"}
            />
          </View>
          <View style={styles.cardcontainer}>
            <ValuesCard condition={"Humidity"} value={35} comment={"Low"} />
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
