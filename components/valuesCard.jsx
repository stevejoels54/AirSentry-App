import * as React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Diagram from "./diagrams";
import Sticker from "./sticker";

const ValuesCard = ({ condition, value }) => (
  <View style={styles.mainCardView}>
    {condition === "Air" ? (
      <View style={styles.container}>
        <View style={styles.title}>
          <MaterialCommunityIcons name="air-filter" size={30} color="#171717" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: "#171717",
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            Air Quality
          </Text>
        </View>
        <View style={styles.element}>
          <Diagram condition={value} />
        </View>
      </View>
    ) : condition === "Temperature" ? (
      <View style={styles.container}>
        <View style={styles.title}>
          <MaterialCommunityIcons
            name="thermometer"
            size={30}
            color="#171717"
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: "#171717",
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            Temperature
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CircularProgress
            value={25}
            activeStrokeWidth={25}
            progressValueColor={"#5C5C5C"}
            activeStrokeColor={"#596bad"}
            inActiveStrokeColor={"#a1b1d6"}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={20}
            valueSuffix={"°C"}
          />
          <Sticker condition={"Bad"} />
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.title}>
          <Ionicons name="water" size={30} color="#171717" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: "#171717",
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            Humidity
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CircularProgress
            value={10}
            activeStrokeWidth={25}
            progressValueColor={"#5C5C5C"}
            activeStrokeColor={"#61afb4"}
            inActiveStrokeColor={"#acc2a5"}
            inActiveStrokeOpacity={0.5}
            inActiveStrokeWidth={20}
            valueSuffix={"%"}
          />
          <Sticker condition={"Good"} />
        </View>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  mainCardView: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  container: {
    flex: 1,
  },
  title: {
    justifyContent: "center",
  },
  element: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
});

export default ValuesCard;
