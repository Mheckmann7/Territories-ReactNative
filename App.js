import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { fetchTerritoryData } from './services/territoriesService';
import {BrowserRouter as Router} from 'react-router'
import { NativeRouter, Route, Link } from "react-router-native";
import { createStackNavigator } from '@react-navigation/stack';
import Map from './pages/Map';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    }
  }}>
    <HomeStack.Screen name="Home" component={Login} options={{title: 'Overview'}} />
  </HomeStack.Navigator>
)

const MapStackScreen = ({navigation}) => (
  <MapStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    }
  }}>
    <MapStack.Screen name="Map" component={Map} />
  </MapStack.Navigator>
)

export default function App() {

  async function getTerritories() {
    const data = await fetchTerritoryData();
    setTerritories(data)
  }
  
  useEffect(() => {
    getTerritories()
  }, [])
  
  const [territories, setTerritories] = useState([]);
  console.log(territories)

  return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={MapStackScreen} /> 
      </Drawer.Navigator>
      </NavigationContainer>
    );
}

      {/* <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
