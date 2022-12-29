// simple component to display the home screen
import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import ValuesCard from "../components/valuesCard";
import CurrentDate from "../components/currentDate";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <CurrentDate />
      </View>
      <View style={styles.container}>
        <ValuesCard condition={"Air"} value={"Normal"} />
      </View>
      <View style={styles.container}>
        <ValuesCard condition={"Temperature"} value={50} />
      </View>
      <View style={styles.container}>
        <ValuesCard condition={"Humidity"} value={75} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "column",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
