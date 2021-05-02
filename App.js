import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { fetchTerritoryData } from './services/territoriesService';
import {BrowserRouter as Router} from 'react-router'
import { NativeRouter, Route, Link } from "react-router-native";
import { createStackNavigator } from '@react-navigation/stack';
import Map from './pages/Map/Map';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

const Stack = createStackNavigator();

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
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={Map}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
      </NavigationContainer>
    );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
