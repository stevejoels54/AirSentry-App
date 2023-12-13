import { View, StyleSheet, Dimensions, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import moment from "moment";

const { width, height } = Dimensions.get("window");

const Notification = ({ condition, message, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <View style={styles.body}>
          <Ionicons name="warning-outline" size={35} color="#f57c00" />
          <View style={styles.content}>
            <View style={styles.title}>
              <Text style={{ fontSize: 16 }}>
                {condition == "air"
                  ? "Air Quality"
                  : condition == "temperature"
                  ? "Temperature"
                  : condition == "co"
                  ? "Carbon Monoxide"
                  : "Humidity"}
              </Text>
              {condition == "air" ? (
                <MaterialCommunityIcons
                  name="air-filter"
                  size={20}
                  color="#0d119e"
                />
              ) : condition == "temperature" ? (
                <MaterialCommunityIcons
                  name="thermometer"
                  size={20}
                  color="#0d119e"
                />
              ) : condition == "co" ? (
                <MaterialCommunityIcons
                  name="cloud-outline"
                  size={20}
                  color="#0d119e"
                />
              ) : (
                <MaterialCommunityIcons
                  name="water-percent"
                  size={20}
                  color="#0d119e"
                />
              )}
            </View>
            <Text style={{ fontSize: 14, color: "#0d119e", marginTop: 5 }}>
              {message}
            </Text>
            <Text style={{ fontSize: 10, color: "#5C5C5C", marginTop: 5 }}>
              Time: {moment(time).calendar()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notification: {
    width: width - 20,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Notification;
