import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import data from '../../assets/data';
const { width, height } = Dimensions.get('window');
const aspectRatio = height/width;

const TargetCard = (props) => {
    return (
        <View style={styles.targetContainer}>
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
        height: aspectRatio < 1.6 ? 150 : 200,
        width: aspectRatio < 1.6 ? 200 : 250
    },
    targetContainer: {
        alignItems: 'center',
        marginTop: 20
    }
});

export default TargetCard;