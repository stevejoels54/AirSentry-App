import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Text,
} from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import appActions from "../stateConfig/actions";
import { useState } from "react";
import { isEmpty } from "lodash";
import Notification from "../components/notification";

const NotificationsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.notificationsSuccess);
  const loading = useSelector((state) => state.notificationsLoading);
  const error = useSelector((state) => state.notificationsError);

  useEffect(() => {
    if (isEmpty(data)) {
      dispatch(appActions.getNotifications());
    }
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(appActions.getNotifications());
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
          {isEmpty(data) ? (
            <Text style={styles.text}>No Notifications</Text>
          ) : (
            data?.map((notification) => (
              <Notification
                key={notification?.notification_id}
                condition={notification?.condition}
                message={notification?.message}
                time={notification?.timestamp?.$date}
              />
            ))
          )}
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
  text: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
  },
});

export default NotificationsScreen;
