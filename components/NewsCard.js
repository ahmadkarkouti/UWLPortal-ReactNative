import React from "react";
import styled from "styled-components";

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
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  left: 16px;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #303030;
  left: 28px;
  width: 235px;
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
  width: 342px;
  height: 240px;
  left: 16px;
  right: 16px;
  border-radius: 5px;
`;
