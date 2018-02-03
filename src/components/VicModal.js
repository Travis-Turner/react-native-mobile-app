import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { resetStreak } from '../actions/gameActions';
import { Button } from './common';

class VicModal extends Component {
    handlePlayAgain() {
        this.props.closeModal();
    }
    handleHome() {
        Actions.mainMenu();
        this.props.closeModal();
    }
    render(){
        return (
            <View style={{marginTop: 70, alignItems: 'center'}}>
                <Text style={{fontSize: 40}}>GAME OVER</Text>
                <Text style={{fontSize: 24}}>
                    Your final score was {this.props.streak}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 40}}>
                    <Button onPress={this.handlePlayAgain.bind(this)}>PLAY AGAIN</Button>
                    <Button onPress={this.handleHome.bind(this)}>HOME</Button>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 70,
        alignItems: 'center'
    },
    gameOver: {
        fontSize: 40
    },
    scoreRead: {
        fontSize: 24
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 40
    }
});

export default connect(null, { resetStreak })(VicModal);