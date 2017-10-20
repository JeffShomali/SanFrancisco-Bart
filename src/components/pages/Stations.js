import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Icon
} from "native-base";

import { ListView } from "react-native";

import locations from "../../data.json";
import bartImage from "../../images/bart.jpg";

export default class Stations extends Component {
  state: {
    locations: null
  };

  componentWillMount() {
    this.setState({ locations: locations });
  }

  render() {
    return (
      <Container>
        <Content enableResetScrollToCoords>
          {this.state.locations.map(location => (
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={require("../../images/bart.jpg")} />
                </Left>
                <Body>
                  <Text>{location.name}</Text>
                  <Text note>
                    {`${location.address}, ${location.city}, ${location.zipcode}`}
                  </Text>
                </Body>
                <Right>
                  <Icon
                    ios="ios-arrow-forward"
                    android="md-menu"
                    style={{ fontSize: 25, color: "gray" }}
                  />
                </Right>
              </ListItem>
            </List>
          ))}
        </Content>
      </Container>
    );
  }
}
