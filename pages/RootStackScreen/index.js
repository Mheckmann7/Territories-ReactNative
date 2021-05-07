import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScreen';
import Signup from '../Signup';
import Login from '../Login';

const RootStack = createStackNavigator();

export default function RootStackScreen({ navigation }) {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="SplashScreen" component={SplashScreen} />
            <RootStack.Screen name="Signup" component={Signup} />
            <RootStack.Screen name="Login" component={Login} />
        </RootStack.Navigator>
    )
};
