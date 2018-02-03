import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { choicesUpdate, addStreak, resetStreak } from '../actions/gameActions';
import data from '../assets/data';
import s from '../styles/ChoiceCard';
import { CardSection, Card, Button } from './common/index';
import Choice from './Choice';
import VicModal from './VicModal';

class ChoiceCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false
        }
        this.handleChoice = this.handleChoice.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    handleChoice(text) {
        if (text === this.props.targetChar){
            this.props.addStreak();
            this.props.choicesUpdate();
            return;
        }
        //Game over condition
        this.setState({
            modalVisible: true
        });
    }
    closeModal() {
        this.setState({modalVisible:false});
        this.props.resetStreak();
      }
    render () {
    const { 
        text, 
        row, 
        textContainer,
        mainContainer
    } = s;
    //This code depends heavily on a number of random variables.
    //Arrays and objects are being accessed by randomly generated integers.
    //The follow two objects help make neater references based on those random variables.
    const choiceObj = {
        0: this.props.choice1,
        1: this.props.choice2,
        2: this.props.choice3,
        3: this.props.choice4
    }
    const testObj = {
        0: data[choiceObj[this.props.randArr[0]]].romanization,
        1: data[choiceObj[this.props.randArr[1]]].romanization,
        2: data[choiceObj[this.props.randArr[2]]].romanization,
        3: data[choiceObj[this.props.randArr[3]]].romanization
    }   
    return (
        <View style={mainContainer}>
            <View style={row}>
                <Choice 
                    handleChoice={this.handleChoice}
                    index={0}
                    testObj={testObj}
                />
                <Choice 
                    handleChoice={this.handleChoice}
                    index={1}
                    testObj={testObj}
                 />
            </View>
            <View style={row}>
                <Choice 
                    handleChoice={this.handleChoice}
                    index={2}
                    testObj={testObj}
                />
                <Choice 
                    handleChoice={this.handleChoice}
                    index={3}
                    testObj={testObj}
                />
            </View>
            <Modal
            visible={this.state.modalVisible}
            animationType={'slide'}
            onRequestClose={() => this.closeModal()}
            >
                <VicModal 
                    visible={this.state.modalVisible}
                    streak={this.props.streak} 
                    closeModal={this.closeModal}
                />
            </Modal>            
        </View>
        );     
    }
};

const mapStateToProps = (state) => {
    return {
        randArr: state.game.randNums,
        streak: state.game.streak
    }
}

export default connect(mapStateToProps, { choicesUpdate, addStreak, resetStreak })(ChoiceCard);