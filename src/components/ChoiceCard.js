import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import data from '../assets/data';

const ChoiceCard = (props) => {
    const { 
        text, 
        row, 
        textContainer,
        mainContainer
    } = styles;
    return (
        <View style={mainContainer}>
            <View style={row}>
                <TouchableOpacity style={textContainer} onPress={props.handleChoice}>
                    <Text style={text}>{data[props.choice1].romanization}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={textContainer}>
                    <Text style={text}>{data[props.choice2].romanization}</Text>
                </TouchableOpacity>
            </View>

            <View style={row}>
                <TouchableOpacity style={textContainer}>
                
                    <Text style={text}>{data[props.choice3].romanization}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={textContainer}>
                    <Text style={text}>{data[props.choice4].romanization}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        fontSize: 54,
        padding: 30,
        borderRadius: 10
    },
    textContainer: {
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,
        width: 140,
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

export default ChoiceCard;