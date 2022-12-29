import { Appbar } from "react-native-paper";
import { useNavigationState } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import ActionBarImage from "./actionBarImage";

const CustomAppBar = ({ navigation, back }) => {
  const state = useNavigationState((state) => state);
  const routeName = state.routeNames[state.index];
  return (
    <Appbar.Header style={{ backgroundColor: "#fff" }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      {routeName === "Home" ? (
        <View style={styles.container}>
          <ActionBarImage />
          <Appbar.Action
            icon="bell"
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
      ) : null}
      {routeName !== "Home" ? (
        <Appbar.Content
          titleStyle={{ alignSelf: "center" }}
          title={routeName}
        />
      ) : null}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default CustomAppBar;
