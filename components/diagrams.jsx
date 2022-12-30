import React from "react";
import { View, Text, Image } from "react-native";
import Sticker from "./sticker";

const Diagram = ({ condition }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {condition === "Good" ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#2EFF2E",
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
          <Sticker condition="Healthy" />
        </View>
      ) : condition === "Normal" ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#FFFF2E",
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
          <Sticker condition="Normal" />
        </View>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#FF2E2E",
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
          <Sticker condition="Unhealthy" />
        </View>
      )}
    </View>
  );
};

export default Diagram;
