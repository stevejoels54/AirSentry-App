import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const screenWidth = Dimensions.get("window").width * 0.82;

const TemperatureChart = ({ averages = [] }) => {
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: averages.map((day) => day?.day),
    datasets: [
      {
        data: averages.map((day) => day?.temperature),
        color: (opacity = 1) => `rgba(56, 142, 60, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };
  return (
    <View style={styles.card}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: "#171717",
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          Temperature
        </Text>
        <View style={{ marginTop: 5 }}>
          {averages.length > 0 ? (
            <LineChart
              data={data}
              width={screenWidth}
              height={256}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
            />
          ) : (
            <View style={styles.center}>
              <MaterialCommunityIcons
                name="database-alert"
                size={100}
                color="#808080"
              />
              <Text style={{ textAlign: "center" }}>No data available</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TemperatureChart;
