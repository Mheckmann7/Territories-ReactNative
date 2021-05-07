import React from "react";
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';



export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Ionicons name='person' size={50}/>
                                {/* Repalce with a profile image */}
                            <View>
                                <Title style={styles.title}>User name</Title>
                                    <Caption style={styles.caption}>Total Points: </Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>40</Paragraph>
                                <Caption style={styles.caption}>Friends</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                            <Ionicons
                            name="home"
                            color={color}
                            size={size}
                            /> 
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                            <Ionicons
                            name="person"
                            color={color}
                            size={size}
                            /> 
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                            <Ionicons
                            name="airplane"
                            color={color}
                            size={size}
                            /> 
                            )}
                            label="Map"
                            onPress={() => {props.navigation.navigate('Map') }}
                        />
                                <DrawerItem
                            icon={({ color, size }) => (
                            <Ionicons
                            name="settings"
                            color={color}
                            size={size}
                            /> 
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('Settings') }}
                            />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                    <Ionicons
                    name="backspace"
                    color={color}
                    size={size}
                    /> 
                    )}
                    label="Signout"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }

});