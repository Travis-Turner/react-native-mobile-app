import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const aspectRatio = height/width;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginTop: aspectRatio < 1.6 ? 10 : 5
    },
    text: {
        fontSize: aspectRatio < 1.6 ? 20 : 34,
        padding: 30,
        borderRadius: 10
    },
    textContainer: {
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        height: aspectRatio < 1.6 ? 70 : 'auto'
    },
    row: {
        flexDirection: 'row'
    },
    button: {
        padding: 15,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default styles;