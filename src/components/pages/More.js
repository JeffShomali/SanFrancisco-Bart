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

export default class More extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={{ backgroundColor: "yellow" }}>
        <Content padder>
          <Item floatingLabel>
            <Label style={{ fontSize: 30 }}>More contents goes here</Label>
            <Input />
          </Item>
        </Content>
      </Container>
    );
  }
}
