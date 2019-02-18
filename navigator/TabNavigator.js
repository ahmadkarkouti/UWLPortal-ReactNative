import React from "react";
import styled from "styled-components";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ShuttleScreen from "../screens/ShuttleScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Timetable from "../screens/Timetable";
import Registry from "../screens/Registry";

// import { Icon } from "expo";

// Set active colors

const activeColor = "#FF453B";
const inActiveColor = "#b8bece";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;

  return {
    tabBarVisible,
    tabBarLabel: ({ focused }) => (
      <Label
        style={{
          color: focused ? activeColor : inActiveColor
        }}
      >
        Portal
      </Label>
    ),

    tabBarIcon: ({ focused }) => (
      <Icon
        style={{
          tintColor: focused ? activeColor : inActiveColor
        }}
        source={require("../assets/logos/UWL-BANNER.png")}
      />
    )
  };
};

const Label = styled.Text`
  font-size: 13px;
  margin: auto;
`;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

const ShuttleStack = createStackNavigator({
  Shuttle: Timetable
});

ShuttleStack.navigationOptions = () => {
  return {
    tabBarLabel: ({ focused }) => (
      <Label
        style={{
          color: focused ? activeColor : inActiveColor
        }}
      >
        Shuttle
      </Label>
    ),

    tabBarIcon: ({ focused }) => (
      <Icon
        style={{
          tintColor: focused ? activeColor : inActiveColor
        }}
        source={require("../assets/tabBar/bus.png")}
      />
    )
  };
};

const SettingsStack = createStackNavigator({
  Settings: Registry
});

SettingsStack.navigationOptions = () => {
  return {
    tabBarLabel: ({ focused }) => (
      <Label
        style={{
          color: focused ? activeColor : inActiveColor
        }}
      >
        Settings
      </Label>
    ),

    tabBarIcon: ({ focused }) => (
      <Icon
        style={{
          tintColor: focused ? activeColor : inActiveColor
        }}
        source={require("../assets/tabBar/settings.png")}
      />
    )
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ShuttleStack,
    SettingsStack
  },
  {
    showLabel: true,
    activeTintColr: "#FF453B",
    inActiveTintColor: "#b8bece",
    style: {
      backgroundColor: "#ffffff"
    }
  }
);

export default TabNavigator;
