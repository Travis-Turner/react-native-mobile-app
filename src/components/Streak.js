import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const aspectRatio = height/width;

class Scoreboard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.scoreContainer}>
                    <Text style={styles.streak}>STREAK: {this.props.score}</Text>
                </View>
                <TouchableOpacity  
                    style={styles.button}
                    onPress={this.props.onQuit}
                >
                    <Text style={styles.text}>QUIT</Text>
                </TouchableOpacity>
            </View>
        );
    } 
};

const styles = StyleSheet.create({
    container: {
        marginTop: aspectRatio < 1.6 ? 10 : 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    scoreContainer: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 18
    },
    streak: {
        fontSize: aspectRatio < 1.6 ? 18 : 30
    },
    button: {
        padding: 15,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        backgroundColor: 'white'
    }
});

export default Scoreboard;