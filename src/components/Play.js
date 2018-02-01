import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Streak from './Streak';
import ImageCard from './ImageCard';
import ChoiceCard from './ChoiceCard';
import { FadeInView } from './common';
import { targetUpdate, choicesUpdate } from '../actions/gameActions'; 

class Play extends Component {
    componentWillMount() {
        this.props.choicesUpdate();
    }
    onQuit () {
        Actions.mainMenu();
    }
    handleChoice() {
        this.props.choicesUpdate();
    }
    render() {
        return (
            <FadeInView>
                <Streak score={12} onQuit={this.onQuit} />
                <ImageCard targetChar={this.props.choices[0]} />
                <ChoiceCard 
                    choice1={this.props.choices[0]}
                    choice2={this.props.choices[1]}
                    choice3={this.props.choices[2]}
                    choice4={this.props.choices[3]}
                    handleChoice={this.handleChoice.bind(this)}
                />
            </FadeInView>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        targetChar: state.game.targetChar,
        choices: state.game.choices       
    }
};


export default connect(mapStateToProps, { targetUpdate, choicesUpdate })(Play);