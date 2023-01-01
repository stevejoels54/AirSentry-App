import React from "react";
import { View, Text, StyleSheet } from "react-native";

// comments: 'Good', 'Moderate', 'Unhealthy for Sensitive Groups','Unhealthy', 'Very Unhealthy', 'Hazardous'
// colors: green, blue, yellow, orange, red, purple

const AirSticker = ({ comment }) => {
  return (
    <View style={styles.container}>
      {comment === "Healthy" ? (
        <View style={styles.healthysticker}>
          <Text style={{ fontSize: 15, color: "#1b5e20", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : comment === "Moderate" ? (
        <View style={styles.moderatesticker}>
          <Text style={{ fontSize: 15, color: "#1976d2", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : comment === "Unhealthy for Sensitive Groups" ? (
        <View style={styles.unhealthygroupsticker}>
          <Text style={{ fontSize: 15, color: "#caad2a", padding: 5 }}>
            {"Unhealthy for the Sensitive"}
          </Text>
        </View>
      ) : comment === "Unhealthy" ? (
        <View style={styles.unhealthysticker}>
          <Text style={{ fontSize: 15, color: "#ef6c00", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : comment === "Very Unhealthy" ? (
        <View style={styles.veryunhealthysticker}>
          <Text style={{ fontSize: 15, color: "#b71c1c", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : (
        <View style={styles.harzadoussticker}>
          <Text style={{ fontSize: 15, color: "#4a148c", padding: 5 }}>
            {comment}
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
  healthysticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#a5d6a7",
    alignItems: "center",
    justifyContent: "center",
  },
  moderatesticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#90caf9",
    alignItems: "center",
    justifyContent: "center",
  },
  unhealthygroupsticker: {
    height: 30,
    borderRadius: 25,
    backgroundColor: "#fff59d",
    alignItems: "center",
    justifyContent: "center",
  },
  unhealthysticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffcc80",
    alignItems: "center",
    justifyContent: "center",
  },
  veryunhealthysticker: {
    width: 115,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffab91",
    alignItems: "center",
    justifyContent: "center",
  },
  harzadoussticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ce93d8",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AirSticker;
