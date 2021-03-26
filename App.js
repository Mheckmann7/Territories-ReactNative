import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import Map from './client/pages/Map/Map';

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
