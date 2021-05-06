

import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Nav from '../../components/Nav'

// import RNLocation from 'react-native-location';
// import * as Permissions from 'expo-permissions';

export default function Map({navigation}) {
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
          console.log(location)
        })();
    }, []);
  

      let text = 'Waiting...';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);

      }
  
  //Wait to until we have the users location before displaying the map
      if (location === null) {
        // Better loading logic here
        return <Text>Loading...</Text>
      }
    
      return (
        <View>
          <Text>{text}</Text>
          {/* <Nav navigation={this.props.navigation}/> */}
 
          <Button
    
        title="Login"
        onPress={() =>
          navigation.navigate('Login')
        }
          />
          <Button
        title="Signup"
        onPress={() =>
          navigation.navigate('Signup')
        }
            />

          <MapView
            style={styles.map}
            // centers the map on the users location 
            initialRegion={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }} >
            <Marker
              //places a marker on the users initial location 
              key={1}
              coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude}}
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