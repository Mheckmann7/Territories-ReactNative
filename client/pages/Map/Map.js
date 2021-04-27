

import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

// import RNLocation from 'react-native-location';
// import * as Permissions from 'expo-permissions';

export default function Map(props) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
    }, []);
  

      let text = 'Waiting...';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);

      }
      let currentLocation = null
      if (location !== null) {
        currentLocation = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      }
    
      return (
        <View>
              <Text>{text}</Text>
          <MapView
            style={styles.map}
            initialRegion={currentLocation} >
            <Marker
              key={1}
              coordinate={{ latitude: currentLocation.latitude, longitude: currentLocation.longitude}}
              />
          </MapView>
        </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});