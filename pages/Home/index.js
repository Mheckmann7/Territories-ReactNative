import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { FlatList, ScrollView } from "react-native-gesture-handler";

import img from '../../assets/home.jpg';
import img2 from '../../assets/home1.jpg';
import img3 from '../../assets/home2.jpg';
import ImgItem from '../../components/imgItems';
import images from '../../components/images'


const { width} = Dimensions.get("window");
const height = '100%'
// const images = [{ image: img }, { image: img2 }, { image: img3 }]

export default function Home({ navigation, route }) {
    // const [active, setActive] = useState(0);
    return (
        <View>
            <FlatList
                data={images}
                horizontal
                renderItem={({ item }) => <ImgItem image={item} />}
                // showsHorizontalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').width}
            />
            {/* <ScrollView
                paginEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={setActive}
                style={styles.scroll}>
                {
                images.map((image, index) => (
                    <Image
                    key={index}
                    source={image}
                    style={styles.image}
                    />
                ))
                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    images.map((img, key) => (
                        <Text key={key} style={key == active ? styles.pageTextActive : styles.pageText}>◯</Text>
                    ))
                }
          
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width,
        height
    },
    scroll: {
        width,
        height
    },
    image: {
        width,
        height,
        resizeMode: 'cover',
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 2,
        alignSelf: 'center'
    },
    pageText: {
        color: "white",
        margin: 3,
    },
    pageTextActive: {
        color: "gray",
        margin: 3 
    }

})