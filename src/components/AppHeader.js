import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { Header, Left, Body, Right, Button, Icon, Title } from "native-base";

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => props.navigation.navigate("Favorites")}
          >
            <Icon name="map" />
          </Button>
        </Left>
        <Body>
          <Title>SF BART</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="navigate" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default AppHeader;
