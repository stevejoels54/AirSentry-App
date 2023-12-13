import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomAppBar from "../components/customAppBar";
import HomeScreen from "../screens/homeScreen";
import TrendScreen from "../screens/trendScreen";
import SettingsScreen from "../screens/settingsScreen";
import NotificationsScreen from "../screens/notificationsScreen";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const TrendStack = createNativeStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      header: (props) => <CustomAppBar {...props} />,
    }}
  >
    <HomeStack.Screen name="home" component={HomeScreen} />
    <HomeStack.Screen name="notifications" component={NotificationsScreen} />
  </HomeStack.Navigator>
);

const SettingsStackScreen = () => (
  <SettingsStack.Navigator
    screenOptions={{
      header: (props) => <CustomAppBar {...props} />,
    }}
  >
    <SettingsStack.Screen name="settings" component={SettingsScreen} />
  </SettingsStack.Navigator>
);

const TrendStackScreen = () => (
  <TrendStack.Navigator
    screenOptions={{
      header: (props) => <CustomAppBar {...props} />,
    }}
  >
    <TrendStack.Screen name="trend" component={TrendScreen} />
  </TrendStack.Navigator>
);

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#4B7BF5"
        barStyle={{ backgroundColor: "#e0e7f4" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Trend"
          component={TrendStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chart-box"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-sharp" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyTabs;
