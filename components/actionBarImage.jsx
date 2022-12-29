import React from "react";
import { View, Image } from "react-native";

const ActionBarImage = () => {
  return (
    <View>
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 120, height: 60, borderRadius: 40 / 2, marginTop: 5 }}
      />
    </View>
  );
};

export default ActionBarImage;
