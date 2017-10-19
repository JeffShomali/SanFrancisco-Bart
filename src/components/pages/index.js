import React, { Component } from "react";

import Maps from "./Maps";
import Stations from "./Stations";
import Favorites from "./Favorites";
import More from "./More";
import AppHeader from "../AppHeader";

import { TabNavigator } from "react-navigation";
import {
  Button,
  Text,
  Icon,
  Item,
  Footer,
  FooterTab,
  Label
} from "native-base";

export default (MainScreenNavigator = TabNavigator(
  {
    Maps: { screen: Maps },
    Stations: { screen: Stations },
    Favorites: { screen: Favorites },
    More: { screen: More }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Maps")}
            >
              <Icon active name="globe" size={30} color="#4F8EF7" />
              <Text>Maps</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Stations")}
            >
              <Icon name="search" size={30} color="#4F8EF7" />
              <Text>Stations</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Favorites")}
            >
              <Icon name="star" size={30} color="#4F8EF7" />
              <Text>Favorites</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 3}
              onPress={() => props.navigation.navigate("More")}
            >
              <Icon name="list" size={30} color="#4F8EF7" />
              <Text>More</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));
