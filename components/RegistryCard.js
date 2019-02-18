import React from "react";
import styled from "styled-components";
import { screenWidth } from "../supporting_files/Data";

const RegistryCard = props => (
  <View>
    <Container>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <Image source={props.image} />
    </Container>
  </View>
);

export default RegistryCard;

const View = styled.View``;

const Container = styled.View`
  width: ${screenWidth - 32};
  height: 150px;
  margin: 30px auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.15);
`;

const Title = styled.Text`
  margin: 16px 16px 0 16px;
  font-size: 23px;
  font-weight: 800;
  color: #1f5e78;
`;

const Subtitle = styled.Text`
  margin: 16px;
  font-size: 12px;
  font-weight: 500;
  color: #787878;
`;

const Image = styled.Image`
  width: 70px;
  height: 70px;
  align-self: flex-end;
  bottom: 150px;
`;
