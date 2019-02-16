import React from "react";
import styled from "styled-components";
import { UserData } from "../supporting_files/Data";

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
  width: 100%;
  height: 1px;
  background: #e3e3e3;
  align-self: center;
  bottom: 40px;
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
  font-size: 21px;
`;

const Course = styled.Text`
  color: #929292;
  font-weight: 500;
  font-size: 12px;
`;

const Year = styled.Text`
  color: black;
  font-size: 11px;
`;

const Image = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border-color: grey;
  border-width: 0.3px;
  align-self: flex-end;
  bottom: 50px;
  right: 32px;
`;
