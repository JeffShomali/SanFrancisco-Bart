import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  InteractionManager
} from "react-native";

import {
  Container,
  Header,
  Title,
  Footer,
  FooterTab,
  Button,
  Icon,
  Spinner
} from "native-base";

import MapView from "react-native-maps";

const { width, height } = Dimensions.get("window");
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Maps extends Component {
  state = {
    loading: true,
    error: null,

    initialPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0
    },
    markerPosition: {
      latitude: 0,
      longitude: 0
    },

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

  watchID: ?number = null;

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({ loading: false });
    });
    navigator.geolocation.getCurrentPosition(
      position => {
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        };

        this.setState({ initialPosition: initialRegion });
        this.setState({ markerPosition: initialRegion });
      },
      error => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    this.watchID = navigator.geolocation.watchPosition(position => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);

      var lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      };

      this.setState({ initialPosition: lastRegion });
      this.setState({ markerPosition: lastRegion });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <MapView
            style={styles.map}
            region={this.state.initialPosition}
            showsUserLocation={true}
          >
            {this.state.markers.map(marker => (
              <MapView.Marker
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
              />
            ))}
          </MapView>
        )}
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

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

  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject
  }
});
