import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, Content } from "native-base";

import AppHeader from "./AppHeader";
import Maps from "./pages/Maps";
import Stations from "./pages/Stations";
import Favorites from "./pages/Favorites";
import More from "./pages/More";

import MainScreenNavigator from "./pages/index.js";
export default class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <MainScreenNavigator />
      </Container>
    );
  }
}
