import React, { Component } from "react";
import { Text, View } from "react-native";
import { Container, Content } from "native-base";
import { Router, Scene } from "react-native-router-flux";

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

        <Router>
          <Scene key="root">
            <Scene key="station" component={Stations} title="Station" />
          </Scene>
        </Router>

        <AppFooter />
      </Container>
    );
  }
}
