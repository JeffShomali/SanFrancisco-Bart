import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import MapView from "react-native-maps";

class App extends Component {
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
          title: "Walnut Creek",
          description: "Walnut Creek Description",
          coordinates: {
            latitude: 37.9055,
            longitude: -122.0676
          }
        },
        {
          title: "Pleasant Hill",
          description: "Pleasant Hill Description",
          coordinates: {
            latitude: 37.9285,
            longitude: -122.056
          }
        }
      ]
    };
  }

  render() {
    return (
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

export default App;
