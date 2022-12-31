import React from "react";
import { View, Image } from "react-native";
import AirSticker from "./airSticker";

const Diagram = ({ condition, comment }) => {
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
          <AirSticker comment={comment} />
        </View>
      ) : condition === "Moderate" ? (
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
          <AirSticker comment={comment} />
        </View>
      ) : condition === "Unhealthy for Sensitive Groups" ? (
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
              backgroundColor: "#caad2a",
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
          <AirSticker comment={comment} />
        </View>
      ) : condition === "Unhealthy" ? (
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
              backgroundColor: "#ef6c00",
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
          <AirSticker comment={comment} />
        </View>
      ) : condition === "Very Unhealthy" ? (
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
          <AirSticker comment={comment} />
        </View>
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
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
          <AirSticker comment={comment} />
        </View>
      )}
    </View>
  );
};

export default Diagram;
