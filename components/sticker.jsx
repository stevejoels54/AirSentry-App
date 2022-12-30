import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Sticker = ({ comment }) => {
  return (
    <View style={styles.container}>
      {comment === "Healthy" ? (
        <View style={styles.goodsticker}>
          <Text style={{ fontSize: 15, color: "#1b5e20" }}>{comment}</Text>
        </View>
      ) : comment === "Normal" ? (
        <View style={styles.normalsticker}>
          <Text style={{ fontSize: 15, color: "#1976d2" }}>{comment}</Text>
        </View>
      ) : comment === "Unhealthy" ? (
        <View style={styles.highsticker}>
          <Text style={{ fontSize: 15, color: "#b71c1c" }}>{comment}</Text>
        </View>
      ) : comment === "High" ? (
        <View style={styles.highsticker}>
          <Text style={{ fontSize: 15, color: "#b71c1c" }}>{comment}</Text>
        </View>
      ) : comment === "Low" ? (
        <View style={styles.lowsticker}>
          <Text style={{ fontSize: 15, color: "#e65100" }}>{comment}</Text>
        </View>
      ) : (
        <View style={styles.norangesticker}>
          <Text style={{ fontSize: 15, color: "#4a148c" }}>{comment}</Text>
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
  goodsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#a5d6a7",
    alignItems: "center",
    justifyContent: "center",
  },
  normalsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#90caf9",
    alignItems: "center",
    justifyContent: "center",
  },
  highsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ef9a9a",
    alignItems: "center",
    justifyContent: "center",
  },
  lowsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffe0b2",
    alignItems: "center",
    justifyContent: "center",
  },
  norangesticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ce93d8",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: "#000000",
  },
});

export default Sticker;
