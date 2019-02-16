import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import { NewsData, screenWidth } from "../supporting_files/Data";

const News = props => (
  <View>
    <Title>University News</Title>
    <Line />

    {NewsData.map((news, index) => (
      <NewsCard
        key={index}
        logo={news.logo}
        title={news.title}
        subtitle={news.subtitle}
        image={news.image}
      />
    ))}
  </View>
);

export default News;

const View = styled.View``;

const Title = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 25px;
  left: 16px;
`;

const Line = styled.View`
  width: ${screenWidth - 32};
  height: 1px;
  background: rgba(0, 0, 0, 0.05);
  margin: 8px auto;
`;
