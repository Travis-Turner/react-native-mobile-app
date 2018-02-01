import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Scoreboard from './Scoreboard';
import { Button, Card, CardSection, Header } from './common';
import { targetUpdate, choicesUpdate } from '../actions/gameActions'; 

class MainMenu extends Component {
    componentWillMount() {
        this.props.targetUpdate();
        this.props.choicesUpdate();
        alert(this.props.choices);
    }
    onPlayPress () {
        Actions.play();
    }
    render() {
        return (
            <View>
                <Header 
                    headerTextOne="HIRAGNA"
                    headerTextTwo="DRILLER" 
                />
                <Card>
                    <CardSection>
                        <Scoreboard hiScore={12} />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onPlayPress.bind(this)}>
                            PLAY
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button>TRAIN</Button>
                    </CardSection>
                    <CardSection>
                        <Button>SETTINGS</Button>
                        <Button>STUDY</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        targetChar: state.game.targetChar,
        choices: state.game.choices
    }
}

export default connect(mapStateToProps, { targetUpdate, choicesUpdate })(MainMenu);