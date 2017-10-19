import React, { Component } from "react";
import { View, ScrollView, Image } from "react-native";
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

export default class Stations extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content padder>
          <Image source={require("../../images/stations.jpg")} />
        </Content>
      </Container>
    );
  }
}
