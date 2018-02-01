import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scoreboard = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle} >HI-SCORE: {props.hiScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 24
    }
});

export default Scoreboard;