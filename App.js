import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity
} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import Map from './client/pages/Map';

const Stack = createStackNavigator();

export default function App() {


    return (
      <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Map" component={Map}/>
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
