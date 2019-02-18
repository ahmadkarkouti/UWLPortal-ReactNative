import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const PortalCard = props => (
  <TouchableOpacity>
    <Container
      style={{
        backgroundColor: props.code,
        shadowColor: props.code,
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.5,
        shadowRadius: 12
      }}
    >
      <Image source={props.image} resizeMode="contain" />
      <Name>{props.name}</Name>
    </Container>
  </TouchableOpacity>
);

export default PortalCard;

const Container = styled.View`
  height: 120px;
  width: 120px;
  border-radius: 5px;
  padding: 10px;
`;

const Name = styled.Text`
  color: white;
  font-family: "System";
  font-size: 14px;
  font-weight: bold;
  margin: 21.5px 0px 8px -3px;
`;

const Image = styled.Image`
  width: 40px;
  height: 40px;
  margin: 10px 0 0 10px;
`;
