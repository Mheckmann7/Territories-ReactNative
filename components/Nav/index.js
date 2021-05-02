import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

export default function Nav(props) {
    return (
        <View>
        <Button
        title="Signup"
        onPress={() =>
          navigation.navigate('Signup')
        }
        />
        <Button
        title="Login"
        onPress={() =>
          navigation.navigate('Login')
        }
        />
        </View>
    )
}