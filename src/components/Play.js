import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Streak from './Streak';
import ImageCard from './ImageCard';
import ChoiceCard from './ChoiceCard';
import { FadeInView } from './common';
import { targetUpdate, choicesUpdate, resetStreak } from '../actions/gameActions'; 

class Play extends Component {
    componentWillMount() {
        this.props.choicesUpdate();
    }
    onQuit () {
        Actions.mainMenu();
        resetStreak();
    }
    render() {
        return (
            <FadeInView>
                <Streak score={this.props.streak} onQuit={this.onQuit} />
                <ImageCard targetChar={this.props.choices[0]} />
                <ChoiceCard 
                    choice1={this.props.choices[0]}
                    choice2={this.props.choices[1]}
                    choice3={this.props.choices[2]}
                    choice4={this.props.choices[3]}
                    targetChar={this.props.choices[0]}
                />
            </FadeInView>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        targetChar: state.game.targetChar,
        choices: state.game.choices,
        streak: state.game.streak       
    }
};


export default connect(mapStateToProps, { targetUpdate, choicesUpdate, resetStreak })(Play);