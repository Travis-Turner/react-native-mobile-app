import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, CardSection } from './common';

const Scoreboard = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.streak}>STREAK: {props.score}</Text>
            <TouchableOpacity  
                style={styles.button}
                onPress={props.onQuit}
            >
                <Text style={styles.text}>QUIT</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        fontSize: 18
    },
    streak: {
        fontSize: 30
    },
    button: {
        padding: 15,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default Scoreboard;