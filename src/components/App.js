import React, { Component } from "react";
import { Text, View } from "react-native";

import { Container, Content } from "native-base";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <Container>
        <AppHeader />
        <Home />
        <AppFooter />
      </Container>
    );
  }
}

export default App;
