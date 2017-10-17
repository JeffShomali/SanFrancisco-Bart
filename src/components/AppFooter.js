import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Icon, Footer, FooterTab } from "native-base";

class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon active name="globe" size={30} color="#4F8EF7" />
            <Text>Maps</Text>
          </Button>
          <Button vertical>
            <Icon name="search" size={30} color="#4F8EF7" />
            <Text>Stations</Text>
          </Button>
          <Button vertical active>
            <Icon name="star" size={30} color="#4F8EF7" />
            <Text>Favorites</Text>
          </Button>
          <Button vertical>
            <Icon name="list" size={30} color="#4F8EF7" />
            <Text>More</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;
