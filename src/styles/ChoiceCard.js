import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        fontSize: 34,
        padding: 30,
        borderRadius: 10
    },
    textContainer: {
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        width: '40%',
        alignItems: 'center'
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