import React from "react";
import styled from "styled-components";
import { screenWidth } from "../supporting_files/Data";

const NewsCard = props => (
  <View>
    <Container>
      <Logo source={props.logo} resizeMode="contain" />
      <Title>{props.title}</Title>
    </Container>
    <Subtitle>{props.subtitle}</Subtitle>
    <Image source={props.image} resizeMode="cover" />
  </View>
);

export default NewsCard;

const View = styled.View`
  margin: 20px 0 0 0;
`;

const Container = styled.View`
  flex-direction: row;
  left: 16px;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

const Title = styled.Text`
  width: ${screenWidth - 50 - 16};
  font-size: 15px;
  font-weight: bold;
  color: #303030;
  left: 16px;
`;

const Subtitle = styled.Text`
  font-size: 11px;
  color: #aaaaaa;
  bottom: 10px;
  left: 80px;
  width: 290px;
  height: 40px;
`;

const Image = styled.Image`
  width: ${screenWidth - 32};
  height: 240px;
  border-radius: 5px;
  margin: auto;
`;
