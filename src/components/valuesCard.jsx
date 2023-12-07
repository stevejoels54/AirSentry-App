import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProgressIndicator from "./cicularProgress";
import Diagram from "./airIndicator";
import TemperatureSticker from "./stickers/temperatureSticker";
import HumiditySticker from "./stickers/humiditySticker";
import CoSticker from "./stickers/coSticker";

const ValuesCard = ({ condition, value, comment, updated }) => (
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
        <Diagram comment={comment} updated={updated} />
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
          <ProgressIndicator
            condition={"Temperature"}
            value={value}
            comment={comment}
          />
          <TemperatureSticker comment={comment} updated={updated} />
        </View>
      </View>
    ) : condition === "Humidity" ? (
      <View style={styles.container}>
        <View style={styles.title}>
          <MaterialCommunityIcons
            name="water-percent"
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
            Humidity
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ProgressIndicator
            condition={"Humidity"}
            value={value}
            comment={comment}
          />
          <HumiditySticker comment={comment} updated={updated} />
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.title}>
          <MaterialCommunityIcons
            name="cloud-outline"
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
            Carbon Monoxide
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ProgressIndicator
            condition={"Co"}
            value={value || 0}
            comment={comment}
          />
          <CoSticker comment={comment} updated={updated} />
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
    marginTop: 10,
  },
});

export default ValuesCard;
