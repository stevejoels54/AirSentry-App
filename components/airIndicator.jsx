import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AirSticker from "./airSticker";

const Diagram = ({ condition, comment, updated }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {condition === "Healthy" ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: "#1b5e20",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/happy.png")}
              style={{
                width: "75%",
                height: "75%",
              }}
            />
          </View>
          <AirSticker comment={comment} updated={updated} />
        </View>
      ) : condition === "Moderate" ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: "#1976d2",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/normal.png")}
              style={{
                width: "75%",
                height: "75%",
              }}
            />
          </View>
          <AirSticker comment={comment} updated={updated} />
        </View>
      ) : condition === "Unhealthy for Sensitive Groups" ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: "#caad2a",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/neutral.png")}
              style={{
                width: "75%",
                height: "75%",
              }}
            />
          </View>
          <AirSticker comment={comment} updated={updated} />
        </View>
      ) : condition === "Unhealthy" ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: "#ef6c00",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/neutral.png")}
              style={{
                width: "75%",
                height: "75%",
              }}
            />
          </View>
          <AirSticker comment={comment} updated={updated} />
        </View>
      ) : condition === "Very Unhealthy" ? (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: "#b71c1c",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/sad.png")}
              style={{
                width: "75%",
                height: "75%",
              }}
            />
          </View>
          <AirSticker comment={comment} updated={updated} />
        </View>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: "#4a148c",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/sad.png")}
              style={{
                width: "75%",
                height: "75%",
              }}
            />
          </View>
          <AirSticker comment={comment} updated={updated} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1b5e20",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Diagram;
