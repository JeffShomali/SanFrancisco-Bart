import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, Content } from "native-base";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Maps from "./pages/Maps";
import Stations from "./pages/Stations";
import Favorites from "./pages/Favorites";
import More from "./pages/More";

export default class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader />

        <Maps />

        <AppFooter />
      </Container>
    );
  }
}
