import React from "react";
import styled from "styled-components";

class ShuttleScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Container>
        <Text>Shuttle Screen</Text>
      </Container>
    );
  }
}

export default ShuttleScreen;

const Container = styled.View`
  flex: 1;
  background: white;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 35px;
  font-weight: 800;
`;
