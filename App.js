import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { fetchTerritoryData } from './src/services/territoriesService';


import { createStackNavigator } from '@react-navigation/stack';
import Map from './pages/Map/Map';

const Stack = createStackNavigator();


export default function App() {

  async function getTerritory() {
    const data = await fetchTerritoryData();
    console.log(data)
  }
  
  useEffect(() => {
    getTerritory()
  }, [])
  
  const [territories, setTerritories] = useState([]);
  

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
