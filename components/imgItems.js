import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions } from 'react-native'

import img from '../assets/home.jpg';
import img2 from '../assets/home1.jpg';
import img3 from '../assets/home2.jpg';
const { width} = Dimensions.get("window");
const height = '100%'

// const images = [img, img2, img3]

const ImgItem = (props) => {
    const { image } = props.image;
    return (
        <View>
                <Image
                    key={image}
                    source={image}
                    style={styles.image}
                />
        </View>
    )
}

export default ImgItem

const styles = StyleSheet.create({
    image: {
        width,
        height,
        resizeMode: 'cover',
    },
})