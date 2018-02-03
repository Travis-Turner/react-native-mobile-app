import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import data from '../assets/data';

const ImageCard = (props) => {
    return (
        <View style={styles.imageContainer}>
        <Image 
            source={data[props.targetChar].image} 
            style={styles.image}
            resizeMode="contain"
        />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 250
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 20
    }
});

export default ImageCard;