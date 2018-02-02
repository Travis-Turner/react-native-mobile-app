import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { choicesUpdate, addStreak } from '../actions/gameActions';
import data from '../assets/data';

class ChoiceCard extends Component {

    handleChoice(text) {
        console.log(text);
        console.log(this.props.targetChar);
        if (text === this.props.targetChar){
            this.props.addStreak();
        }
        this.props.choicesUpdate();
    }
    render () {
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
    const { 
        text, 
        row, 
        textContainer,
        mainContainer
    } = styles;
    const choiceObj = {
        0: this.props.choice1,
        1: this.props.choice2,
        2: this.props.choice3,
        3: this.props.choice4
    }
    return (
        <View style={mainContainer}>
            <View style={row}>
                <TouchableOpacity style={textContainer} onPress={() => {
                    console.log(this.props.randArr[0]);
                    this.handleChoice(data[choiceObj[this.props.randArr[0]]].romanization);
                }}>
                    <Text style={text}>{data[choiceObj[this.props.randArr[0]]].romanization}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={textContainer} onPress={() => {
                    this.handleChoice(data[choiceObj[this.props.randArr[1]]].romanization);
                }}>
                    <Text style={text}>{data[choiceObj[this.props.randArr[1]]].romanization}</Text>
                </TouchableOpacity>
            </View>

            <View style={row}>
                <TouchableOpacity style={textContainer} onPress={() => {
                    this.handleChoice(data[choiceObj[this.props.randArr[2]]].romanization);
                }}>
                    <Text style={text}>{data[choiceObj[this.props.randArr[2]]].romanization}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={textContainer} onPress={() => {
                    this.handleChoice(data[choiceObj[this.props.randArr[3]]].romanization);
                }}>
                    <Text style={text}>{data[choiceObj[this.props.randArr[3]]].romanization}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    }
};

const mapStateToProps = (state) => {
    return {
        randArr: state.game.randNums
    }
}

export default connect(mapStateToProps, { choicesUpdate, addStreak })(ChoiceCard);