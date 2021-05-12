import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, ActivityIndicator } from "react-native";
import { fetchTerritoryData } from './services/territoriesService';
import {BrowserRouter as Router} from 'react-router'
import { NativeRouter, Route, Link } from "react-router-native";

import AsyncStorage from '@react-native-community/async-storage';

import MainTabScreen from './pages/Menu';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './pages/Drawer';
import Settings from './pages/Settings';

import { AuthContext } from './components/context';

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

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETREIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].userName;
      console.log(userName)
        try {
       
          await AsyncStorage.setItem('userToken', userToken)
        } catch (error) {
          console.log(error)
        }
      dispatch({ type: 'LOGIN', id: userName, token: userToken});
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (error) {
        console.log(error)
      }
      dispatch({type: 'LOGOUT'})
    },
    signUp: async (formState) => {
      console.log(formState)
      const userName = formState.userName;
      const password = formState.password;
      const userToken = 'randomToken'
      try {
        userToken = 'randomToken';
        await AsyncStorage.setItem('userToken', userToken)
      } catch (error) {
        console.log(error)
      }
      dispatch({ type: 'REGISTER', id: userName, token: userToken});
      // setUserToken('randomToken');
      // setIsLoading(false);
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false)
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log(error)
      }
      dispatch({type: 'RETREIVE_TOKEN', token: userToken })
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  console.log(loginState.userName)

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} userName={loginState.userName} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
        ) :
          <RootStackScreen />
        }
      </NavigationContainer>
  
      </AuthContext.Provider>
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
