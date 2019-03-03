import React, { Component } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import NaviBar from "react-native-pure-navigation-bar";
import RegistryCard from "../components/RegistryCard";

export default class Registry extends Component {
  static navigationOptions = {
    title: "My Registry",
    headerTintColor: "#ffffff",
    headerStyle: {
      backgroundColor: "#00ACF8",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {registryData.map((data, index) => (
            <RegistryCard
              key={index}
              title={data.title}
              subtitle={data.subtitle}
              image={data.image}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const View = styled.View``;

const registryData = [
  {
    title: "My Studies",
    subtitle:
      "Welcome Franck-Stephane. Below is the list of the Programmes you are enrolled on at the University of West London. Please select the Programme for which you wish to view your studies.",
    image: require("../assets/icons/studies.png")
  },
  {
    title: "My Studies",
    subtitle:
      "Welcome Franck-Stephane. Below is the list of the Programmes you are enrolled on at the University of West London. Please select the Programme for which you wish to view your studies.",
    image: require("../assets/icons/studies.png")
  },
  {
    title: "My Studies",
    subtitle:
      "Welcome Franck-Stephane. Below is the list of the Programmes you are enrolled on at the University of West London. Please select the Programme for which you wish to view your studies.",
    image: require("../assets/icons/studies.png")
  }
];
