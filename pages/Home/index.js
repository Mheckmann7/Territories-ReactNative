import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { FlatList, ScrollView } from "react-native-gesture-handler";

import ImgItem from '../../components/imgItems';
import images from '../../components/images'

export default function Home() {
    return (
        <View>
            <FlatList
                data={images}
                horizontal
                renderItem={({ item }) => <ImgItem image={item}/>}
                // showsHorizontalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width}
            />
        </View>
    )
}
