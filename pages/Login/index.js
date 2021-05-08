import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Platform, Button, TouchableOpacity, TextInput } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function Login({ navigation, route }) {
    
    const [user, setUser] = React.useState({})

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <Ionicons
                        name="person"
                        color="gray"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Username"
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                    <Ionicons
                        name="checkmark"
                        color="gray"
                        size={20}
                    />
                    
                </View>
                <Text style={[styles.text_footer,
                    { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <Ionicons
                        name="link"
                        color="gray"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                    <Ionicons
                        name="eye-off"
                        color="gray"
                        size={20}
                    />
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green"
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: "gray",
        fontSize: 18
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'gray',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});