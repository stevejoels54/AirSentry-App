import React from "react";
import { View, Text, StyleSheet } from "react-native";

// comment: Very Cold, Cold, Cool, Warm, Hot, Very Hot
// colors: blue, yellow, green, orange, red, purple

const TemperatureSticker = ({ comment }) => {
  return (
    <View style={styles.container}>
      {comment === "Very Cold" ? (
        <View style={styles.verycoldsticker}>
          <Text style={{ fontSize: 15, color: "#1976d2", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : comment === "Cold" ? (
        <View style={styles.coldsticker}>
          <Text style={{ fontSize: 15, color: "#caad2a", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : comment === "Cool" ? (
        <View style={styles.coolsticker}>
          <Text style={{ fontSize: 15, color: "#2e7d32", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : comment === "Warm" ? (
        <View style={styles.warmsticker}>
          <Text style={{ fontSize: 15, color: "#ef6c00", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : comment === "Hot" ? (
        <View style={styles.hotsticker}>
          <Text style={{ fontSize: 15, color: "#b71c1c", padding: 5 }}>
            {comment}
          </Text>
        </View>
      ) : (
        <View style={styles.veryhotsticker}>
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
  verycoldsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#90caf9",
    justifyContent: "center",
    alignItems: "center",
  },
  coldsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#fff59d",
    justifyContent: "center",
    alignItems: "center",
  },
  coolsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#a5d6a7",
    justifyContent: "center",
    alignItems: "center",
  },
  warmsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffcc80",
    justifyContent: "center",
    alignItems: "center",
  },
  hotsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffab91",
    justifyContent: "center",
    alignItems: "center",
  },
  veryhotsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ce93d8",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TemperatureSticker;
