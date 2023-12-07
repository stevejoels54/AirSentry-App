import * as React from "react";
import CircularProgress from "react-native-circular-progress-indicator";

const tempActiveColor = (comment) => {
  if (comment === "Very Cold") {
    return "#1976d2";
  } else if (comment === "Cold") {
    return "#caad2a";
  } else if (comment === "Cool") {
    return "#2e7d32";
  } else if (comment === "Warm") {
    return "#ef6c00";
  } else if (comment === "Hot") {
    return "#b71c1c";
  } else {
    return "#4a148c";
  }
};

const tempInactiveColor = (comment) => {
  if (comment === "Very Cold") {
    return "#90caf9";
  } else if (comment === "Cold") {
    return "#fff59d";
  } else if (comment === "Cool") {
    return "#a5d6a7";
  } else if (comment === "Warm") {
    return "#ffcc80";
  } else if (comment === "Hot") {
    return "#ffab91";
  } else {
    return "#ce93d8";
  }
};

const humidityActiveColor = (comment) => {
  if (comment === "Very Dry") {
    return "#4a148c";
  } else if (comment === "Dry") {
    return "#b71c1c";
  } else if (comment === "Comfortable") {
    return "#1976d2";
  } else if (comment === "Humid") {
    return "#caad2a";
  } else {
    return "#2e7d32";
  }
};

const humidityInactiveColor = (comment) => {
  if (comment === "Very Dry") {
    return "#ce93d8";
  } else if (comment === "Dry") {
    return "#ffab91";
  } else if (comment === "Comfortable") {
    return "#90caf9";
  } else if (comment === "Humid") {
    return "#fff59d";
  } else {
    return "#a5d6a7";
  }
};

const coActiveColor = (comment) => {
  if (comment === "Excellent") {
    return "#1b5e20";
  } else if (comment === "Good") {
    return "#1976d2";
  } else if (comment === "Moderate") {
    return "#caad2a";
  } else if (comment === "Unhealthy for Sensitive Groups") {
    return "#ef6c00";
  } else if (comment === "Unhealthy") {
    return "#b71c1c";
  } else {
    return "#4a148c";
  }
};

const coInactiveColor = (comment) => {
  if (comment === "Excellent") {
    return "#a5d6a7";
  } else if (comment === "Good") {
    return "#90caf9";
  } else if (comment === "Moderate") {
    return "#fff59d";
  } else if (comment === "Unhealthy for Sensitive Groups") {
    return "#ffcc80";
  } else if (comment === "Unhealthy") {
    return "#ffab91";
  } else {
    return "#ce93d8";
  }
};

const ProgressIndicator = ({ condition, value, comment }) => {
  return (
    <CircularProgress
      value={value}
      activeStrokeWidth={25}
      progressValueColor={"#5C5C5C"}
      activeStrokeColor={
        condition === "Temperature"
          ? tempActiveColor(comment)
          : condition === "Co"
          ? coActiveColor(comment)
          : humidityActiveColor(comment)
      }
      inActiveStrokeColor={
        condition === "Temperature"
          ? tempInactiveColor(comment)
          : condition === "Co"
          ? coInactiveColor(comment)
          : humidityInactiveColor(comment)
      }
      inActiveStrokeOpacity={0.5}
      inActiveStrokeWidth={20}
      valueSuffix={condition === "Temperature" ? "°C" : "%"}
    />
  );
};

export default ProgressIndicator;
