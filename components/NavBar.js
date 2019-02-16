import React from "react";
import styled from "styled-components";
import { UserData, screenWidth } from "../supporting_files/Data";

const NavBar = props => (
  <View>
    <Logo source={require(".././assets/logos/UWL-BANNER.png")} />
    <Container>
      <Name>{UserData[0]}</Name>
      <Course>{UserData[1]}</Course>
      <Year>{UserData[2]}</Year>
      <Image source={UserData[3]} />
    </Container>
    <Line />
  </View>
);

export default NavBar;

const View = styled.View``;

const Line = styled.View`
  width: ${screenWidth - 32};
  height: 0.5px;
  background: rgba(0, 0, 0, 0.05);
  align-self: center;
  bottom: 40px;
  margin: auto;
`;

const Container = styled.View`
  margin: 20px 0 0 16px;
`;

const Logo = styled.Image`
  height: 50px;
  width: 50px;
  align-self: center;
`;

const Name = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 26px;
`;

const Course = styled.Text`
  color: #929292;
  font-weight: 500;
  font-size: 14px;
`;

const Year = styled.Text`
  color: black;
  font-size: 13px;
`;

const Image = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border-color: grey;
  border-width: 0.3px;
  align-self: flex-end;
  bottom: 50px;
  right: 16px;
`;
