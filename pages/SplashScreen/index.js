import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Button, Dimensions, View, Image, TouchableOpacity, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function SplashScreen({navigation, route}) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='tomato' barStyle='light-content' />
            <View style={styles.header}>
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    source={require('../../assets/placeholder.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.title}>Territories</Text>
                <Text style={styles.text}>Sign in with your account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login') }>
                        <LinearGradient
                            colors={['tomato', 'red']}
                            style={styles.signIn}>
                        
                            <Text style={styles.textSign}>Get Started</Text>
                            <Ionicons
                                name="play"
                                size={20}
                            />
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E94F46'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: 'tomato',
        fontSize: 30,
        fontWeight: 'bold'
    },  
    text: {
        color: 'grey',
        marginTop: 5,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
       
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
     
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
});