import React, { Component } from "react";
import { View } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default class Favorites extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: "darkgreen" }}>
        <Content padder>
          <Text style={{ fontSize: 30, color: "white" }}>
            This is Favorites
          </Text>
        </Content>
      </Container>
    );
  }
}
