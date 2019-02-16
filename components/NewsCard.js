import React from "react";
import styled from "styled-components";
import { screenWidth } from "../supporting_files/Data";

const NewsCard = props => (
  <View>
    <Container>
      <Logo source={props.logo} resizeMode="contain" />
      <SubContainer>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </SubContainer>
    </Container>

    <Image source={props.image} resizeMode="cover" />
    <Seperator />
  </View>
);

export default NewsCard;

const View = styled.View`
  margin: 20px 0 0 0;
`;

const SubContainer = styled.View``;

const Container = styled.View`
  flex-direction: row;
  left: 16px;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
`;

const Title = styled.Text`
  width: ${screenWidth - 50 - 16 - 16 - 16};
  font-size: 15px;
  font-weight: bold;
  color: #303030;
  left: 16px;
  margin-right: 16px;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: #aaaaaa;
  width: ${screenWidth - 50 - 16 - 16 - 16};
  padding-bottom: 8px;
  height: 50px;
  margin: 2px 16px 10px;
`;

const Image = styled.Image`
  width: ${screenWidth - 32};
  height: 240px;
  border-radius: 5px;
  margin: auto;
  margin-bottom: 16px;
`;

const Seperator = styled.View`
  width: ${screenWidth};
  height: 10px;
  background: rgba(0, 0, 0, 0.05);
  margin: 8px auto;
`;
