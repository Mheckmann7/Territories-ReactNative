import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Platform, Button, TouchableOpacity, TextInput, StatusBar } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { State } from "react-native-gesture-handler";

export default function Login({ navigation, route }) {
    
    const [icon, setIcon] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setIcon({
                ...icon,
                check_textInputChange: true
            });
        } else {
            setIcon({
                ...icon,
                check_textInputChange: false
            });
        }
    }

    const updateSecureTextEntry = () => {
            setIcon({
                ...icon,
                secureTextEntry: !icon.secureTextEntry,
            });

        }
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='tomato' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
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
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {icon.check_textInputChange ?
                        <Ionicons
                            name="checkmark"
                            color="green"
                            size={20}
                        />
                        : null} 
                    
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
                        secureTextEntry={icon.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {icon.secureTextEntry ?
                            <Ionicons
                                name="eye-off"
                                color="gray"
                                size={20}
                            />
                            :
                            <Ionicons
                                name="eye"
                                color="gray"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <LinearGradient
                        colors={['tomato', 'red']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign,  {color: 'white'}]}>Sign In</Text>
                    </LinearGradient>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={[styles.signIn, {borderColor: 'tomato', borderWidth: 1, marginTop: 15}]}
                    >
                        <Text style={[styles.textSign,  {color: 'tomato'}]}>Sign up</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato"
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
        fontSize: 18,
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
        fontWeight: 'bold',
      
    }
});