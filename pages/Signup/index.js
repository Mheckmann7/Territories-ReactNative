import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Platform, Button, TouchableOpacity, TextInput, StatusBar, Form } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


export default function Signup({ navigation, route }) {
    
    const [icon, setIcon] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
    })

    const [formState, setFormState] = useState(getInitialFormState())

    function getInitialFormState() {
        return {
            userName: "",
            password: "", 
        }
    }
    function handleChange(event) {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        // event.preventDefault();
        console.log('submitted form data', formState)
        // setFormState(getInitialFormState());
        // props.history.push('/dashboard')
    }

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
                <Text style={styles.text_header}>Sign up now!</Text>
            </View>
   
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                {/* <View onSubmit={handleSubmit}> */}
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <Ionicons
                        name="person"
                        color="gray"
                        size={20}
                    />
                    <TextInput
                        name="userName"
                        onChangeText={formState.userName}
                        onChange={handleChange}
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
                        name="password"
                        onChangeText={formState.userName}
                        onChange={handleChange}
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
                {/* <Text style={[styles.text_footer,
                    { marginTop: 35 }]}>Confirm Password</Text>
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
                </View> */}
                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={styles.signIn} >
                    <LinearGradient
                        colors={['tomato', 'red']}
                        style={styles.signIn}
                        
                    >
                        <Text style={[styles.textSign,  {color: 'white'}]}>Sign up</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {borderColor: 'tomato', borderWidth: 1, marginTop: 15}]}
                    >
                        <Text style={[styles.textSign,  {color: 'tomato'}]}>Sign In</Text>
                    </TouchableOpacity>

                </View>
                 {/* </View> */}
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

