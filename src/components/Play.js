import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Streak from './Streak';
import Standard from './Standard/Standard';
import TargetCard from './Standard/TargetCard';
import ChoiceCard from './Standard/ChoiceCard';
import { FadeInView } from './common';
import { targetUpdate, choicesUpdate, resetStreak } from '../actions/gameActions'; 

class Play extends Component {
    constructor(props){
        super(props);
        this.onQuit = this.onQuit.bind(this);
    }
    componentWillMount() {
        this.props.choicesUpdate();
    }
    onQuit () {
        if (this.props.streak > this.props.hiScore){
            try {
                AsyncStorage.setItem('hi-score', this.props.streak.toString());
              } catch (error) {
                
              }
        }
        Actions.mainMenu();
        this.props.resetStreak();
    }
    render() {
        return (
            <FadeInView>
                <Standard 
                    choices={this.props.choices}
                    streak={this.props.streak}
                    onQuit={this.onQuit}
                />
            </FadeInView>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        targetChar: state.game.targetChar,
        choices: state.game.choices,
        streak: state.game.streak,
        hiScore: state.game.hiScore     
    }
};


export default connect(mapStateToProps, { targetUpdate, choicesUpdate, resetStreak })(Play);