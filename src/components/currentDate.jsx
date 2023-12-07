import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

const CurrentDate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.datetext}>{moment().format("MMMM Do YYYY")}</Text>
      <Text style={styles.welcometext}>Today's conditions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
  },
  datetext: {
    fontSize: 15,
    color: "#5C5C5C",
  },
  welcometext: {
    fontSize: 30,
    color: "#000000",
  },
});

export default CurrentDate;
