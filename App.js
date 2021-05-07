import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from "react-native";
import { fetchTerritoryData } from './services/territoriesService';
import {BrowserRouter as Router} from 'react-router'
import { NativeRouter, Route, Link } from "react-router-native";


import MainTabScreen from './pages/Menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './pages/Drawer';
import Settings from './pages/Settings';

import RootStackScreen from './pages/RootStackScreen';

const Drawer = createDrawerNavigator();



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
      <RootStackScreen /> 
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator> */}
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
