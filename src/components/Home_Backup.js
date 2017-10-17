import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Footer,
  FooterTab
} from "native-base";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.9055,
        longitude: -122.067,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        error: null
      },

      markers: [
        {
          title: "North Concord/Martinez",
          description: "North Concord/Martinez Station Description",
          coordinates: {
            latitude: 38.006558,
            longitude: -122.025514
          }
        },
        {
          title: "Concord",
          description: "Concord Station Description",
          coordinates: {
            latitude: 37.977607,
            longitude: -122.028776
          }
        },
        {
          title: "Pleasant Hill",
          description: "Pleasant Hill/Contra Costa Centre Station Description",
          coordinates: {
            latitude: 37.929551,
            longitude: -122.056054
          }
        },
        {
          title: "Walnut Creek",
          description: "Walnut Creek Station Description",
          coordinates: {
            latitude: 37.909715,
            longitude: -122.066653
          }
        },
        {
          title: "Lafayette",
          description: "Lafayette Station Description",
          coordinates: {
            latitude: 37.897428,
            longitude: -122.124139
          }
        },
        {
          title: "Orinda",
          description: "Orinda Station Description",
          coordinates: {
            latitude: 37.87858,
            longitude: -122.183799
          }
        },
        {
          title: "Rockridge",
          description: "Rockridge Station Description",
          coordinates: {
            latitude: 37.844923,
            longitude: -122.251381
          }
        },
        {
          title: "MacArthur",
          description: "MacArthur Station Description",
          coordinates: {
            latitude: 37.829525,
            longitude: -122.26625
          }
        },
        {
          title: "19th St",
          description: "19th St / Oakland Station Description",
          coordinates: {
            latitude: 37.809071,
            longitude: -122.268305
          }
        },
        {
          title: "12th St",
          description: "12th St / Oakland Station Description",
          coordinates: {
            latitude: 37.803866,
            longitude: -122.271604
          }
        },
        {
          title: "Embarcadero",
          description: "Embarcadero Station Description",
          coordinates: {
            latitude: 37.792884,
            longitude: -122.397035
          }
        },
        {
          title: "Montgomery",
          description: "Montgomery Station Description",
          coordinates: {
            latitude: 37.78934,
            longitude: -122.401123
          }
        },
        {
          title: "Powell St.",
          description: "Powell St. Station Description",
          coordinates: {
            latitude: 37.784715,
            longitude: -122.408019
          }
        },
        {
          title: "Civic Center/UN Plaza",
          description: "Civic Center/UN Plaza Station Description",
          coordinates: {
            latitude: 37.779803,
            longitude: -122.414497
          }
        },
        {
          title: "Daly City",
          description: "Daly City Station Description",
          coordinates: {
            latitude: 337.70633,
            longitude: -122.46901
          }
        },
        {
          title: "San Francisco Int'l Airport Station",
          description: "San Francisco Int'l Airport Station Description",
          coordinates: {
            latitude: 37.616218,
            longitude: -122.392233
          }
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="map" />
            </Button>
          </Left>
          <Body>
            <Title>SF BART</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="navigate" />
            </Button>
          </Right>
        </Header>

        <View style={styles.container}>
          <MapView style={styles.map} region={this.state.region}>
            {this.state.markers.map(marker => (
              <MapView.Marker
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
              />
            ))}
          </MapView>

          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>

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
              <Icon name="star-o" size={30} color="#4F8EF7" />
              <Text>Favorites</Text>
            </Button>
            <Button vertical>
              <Icon name="list" size={30} color="#4F8EF7" />
              <Text>More</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: "rgba(0,122,255,0.1)",
    borderColor: "rgba(0,122,255,0.3)",
    alignItems: "center",
    justifyContent: "center"
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20 / 2,
    overflow: "hidden",
    backgroundColor: "#007AFF"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
