import * as React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { StyleSheet, View } from "react-native";
import Diagram from "./diagrams";

const ValuesCard = ({ condition, value }) => (
  <View style={styles.mainCardView}>
    {condition === "Air" ? (
      <Diagram condition={value} />
    ) : condition === "Temperature" ? (
      <CircularProgress
        value={value}
        activeStrokeWidth={12}
        progressValueColor={"black"}
        title={"deg C"}
        titleColor={"black"}
        titleStyle={{ fontWeight: "bold" }}
      />
    ) : (
      <CircularProgress
        value={value}
        activeStrokeWidth={12}
        progressValueColor={"black"}
        title={"%"}
        titleColor={"black"}
        titleStyle={{ fontWeight: "bold" }}
      />
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
});

export default ValuesCard;
