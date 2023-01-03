import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

// comment: Very Dry, Dry, Comfortable, Humid, Very Humid
// colors: purple, red, blue, yellow, green

const HumiditySticker = ({ comment, updated }) => {
  return (
    <View style={styles.container}>
      {comment === "Very Dry" ? (
        <View style={styles.center}>
          <View style={styles.verydriesticker}>
            <Text style={{ fontSize: 15, color: "#4a148c", padding: 5 }}>
              {comment}
            </Text>
          </View>
          <Text style={{ fontSize: 10, color: "#5C5C5C", padding: 5 }}>
            Updated: {moment(updated).calendar()}
          </Text>
        </View>
      ) : comment === "Dry" ? (
        <View style={styles.center}>
          <View style={styles.driesticker}>
            <Text style={{ fontSize: 15, color: "#b71c1c", padding: 5 }}>
              {comment}
            </Text>
          </View>
          <Text style={{ fontSize: 10, color: "#5C5C5C", padding: 5 }}>
            Updated: {moment(updated).calendar()}
          </Text>
        </View>
      ) : comment === "Comfortable" ? (
        <View style={styles.center}>
          <View style={styles.comfortablesticker}>
            <Text style={{ fontSize: 15, color: "#1976d2", padding: 5 }}>
              {comment}
            </Text>
          </View>
          <Text style={{ fontSize: 10, color: "#5C5C5C", padding: 5 }}>
            Updated: {moment(updated).calendar()}
          </Text>
        </View>
      ) : comment === "Humid" ? (
        <View style={styles.center}>
          <View style={styles.humidsticker}>
            <Text style={{ fontSize: 15, color: "#caad2a", padding: 5 }}>
              {comment}
            </Text>
          </View>
          <Text style={{ fontSize: 10, color: "#5C5C5C", padding: 5 }}>
            Updated: {moment(updated).calendar()}
          </Text>
        </View>
      ) : (
        <View style={styles.center}>
          <View style={styles.veryhumidsticker}>
            <Text style={{ fontSize: 15, color: "#2e7d32", padding: 5 }}>
              {comment}
            </Text>
          </View>
          <Text style={{ fontSize: 10, color: "#5C5C5C", padding: 5 }}>
            Updated: {moment(updated).calendar()}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verydriesticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ce93d8",
    justifyContent: "center",
    alignItems: "center",
  },
  driesticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffab91",
    justifyContent: "center",
    alignItems: "center",
  },
  comfortablesticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#90caf9",
    justifyContent: "center",
    alignItems: "center",
  },
  humidsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#fff59d",
    justifyContent: "center",
    alignItems: "center",
  },
  veryhumidsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#a5d6a7",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HumiditySticker;
