import React from "react";
import styled from "styled-components";
import { SafeAreaView, ScrollView } from "react-native";
import PortalGrid from "../components/PortalGrid";
import NavBar from "../components/NavBar";
import News from "../components/News";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <SafeAreaView>
          <ScrollView>
            <NavBar />
            <PortalGrid />
            <News />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;

const View = styled.View`
  top: 50px;
  background: white;
  flex: 1;
  padding-bottom: 30px;
`;
