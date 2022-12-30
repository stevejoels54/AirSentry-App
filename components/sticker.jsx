import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Sticker = ({ condition }) => {
  return (
    <View style={styles.container}>
      {condition === "Good" ? (
        <View style={styles.goodsticker}>
          <Text style={{ fontSize: 15, color: "#142c1c" }}>{condition}</Text>
        </View>
      ) : condition === "Normal" ? (
        <View style={styles.normalsticker}>
          <Text style={{ fontSize: 15, color: "#0c3578" }}>{condition}</Text>
        </View>
      ) : condition === "Bad" ? (
        <View style={styles.badsticker}>
          <Text style={{ fontSize: 15, color: "#ae6070" }}>{condition}</Text>
        </View>
      ) : condition === "High" ? (
        <View style={styles.highsticker}>
          <Text style={{ fontSize: 15, color: "#ae6070" }}>{condition}</Text>
        </View>
      ) : condition === "Low" ? (
        <View style={styles.lowsticker}>
          <Text style={{ fontSize: 15, color: "#dcb456" }}>{condition}</Text>
        </View>
      ) : (
        <View style={styles.lowsticker}>
          <Text style={{ fontSize: 15, color: "#dcb456" }}>{condition}</Text>
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
    backgroundColor: "#d4edda",
    alignItems: "center",
    justifyContent: "center",
  },
  normalsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#cce5ff",
    alignItems: "center",
    justifyContent: "center",
  },
  badsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#f8d7da",
    alignItems: "center",
    justifyContent: "center",
  },
  highsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#f8d7da",
    alignItems: "center",
    justifyContent: "center",
  },
  lowsticker: {
    width: 100,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#fff3cd",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: "#000000",
  },
});

export default Sticker;
