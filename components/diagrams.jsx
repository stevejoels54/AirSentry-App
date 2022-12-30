import React from "react";
import { View, Image } from "react-native";
import Sticker from "./sticker";

const Diagram = ({ condition, comment }) => {
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
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#388e3c",
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
          <Sticker comment={comment} />
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
          <Sticker comment={comment} />
        </View>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#d32f2f",
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
          <Sticker comment={comment} />
        </View>
      )}
    </View>
  );
};

export default Diagram;
