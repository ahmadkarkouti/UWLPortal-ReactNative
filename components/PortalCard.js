import React from "react";
import styled from "styled-components";

const PortalCard = props => (
  <Container style={{ backgroundColor: props.code }}>
    <Image source={props.image} resizeMode="contain" />
    <Name>{props.name}</Name>
  </Container>
);

export default PortalCard;

const Container = styled.View`
  height: 120px;
  width: 120px;
  border-radius: 5px;
  background: red;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
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
