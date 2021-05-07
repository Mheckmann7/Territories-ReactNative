import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Map from '../Map';
import Home from '../Home';
import Login from '../Login';

import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const LoginStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            shifting = {true}
            style={{ backgroundColor: '#E94F46' }}>
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#E94F46',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapStackScreen}
                options={{
                    tabBarLabel: 'Map',
                    tabBarColor: '#E94F46',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="airplane" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#E94F46',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#E94F46',
      }
    }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor='#E94F46'
              onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
        }}
      />
    </HomeStack.Navigator>
  )
  
  const MapStackScreen = ({navigation}) => (
    <MapStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#E94F46',
        }
        
    }}>
          <MapStack.Screen name="Map" component={Map}
          options={{
          title: 'Overview',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor='#E94F46'
              onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
        }}/>
    </MapStack.Navigator>
  )
  const LoginStackScreen = ({navigation}) => (
    <LoginStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#E94F46',
      }
    }}>
          <LoginStack.Screen name="Login" component={Login}
          options={{
          title: 'Overview',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor='#E94F46'
              onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
        }} />
    </LoginStack.Navigator>
  )