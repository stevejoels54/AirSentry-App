import React from "react";
import { View, Text, Image } from "react-native";

const Diagram = ({ condition }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
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
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 25 }}>
            Good
          </Text>
        </View>
      ) : condition === "Normal" ? (
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
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 25 }}>
            Normal
          </Text>
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
          <Text style={{ marginLeft: 10, fontWeight: "bold", fontSize: 25 }}>
            Bad
          </Text>
        </View>
      )}
    </View>
  );
};

export default Diagram;
