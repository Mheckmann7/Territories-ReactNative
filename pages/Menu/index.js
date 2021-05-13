import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Map from '../Map';
import Home from '../Home';
import Profile from '../Profile';

import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();
const MapStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function MainTabScreen(props) {
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
                name="Profile"
                component={ProfileStackScreen}
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
          title: 'Territories',
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
          title: 'Territories',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor='#E94F46'
              onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
        }}/>
    </MapStack.Navigator>
  )
  const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#E94F46',
      }
    }}>
          <ProfileStack.Screen name="Profile" component={Profile}
          options={{
          title: 'Territories',
          headerLeft: () => (
            <Ionicons.Button name="md-menu" size={25} backgroundColor='#E94F46'
              onPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
        }} />
    </ProfileStack.Navigator>
  )