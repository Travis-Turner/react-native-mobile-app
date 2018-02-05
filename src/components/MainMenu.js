import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, View, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Scoreboard from './Scoreboard';
import { Button, Card, CardSection, Header } from './common';
import { targetUpdate, choicesUpdate, setHiScore } from '../actions/gameActions'; 

class MainMenu extends Component {
    componentWillMount() {
        this.props.targetUpdate();
        this.props.choicesUpdate();
        try {
            let hiScore = AsyncStorage.getItem('hi-score');
            hiScore.then((value) => {
                this.props.setHiScore(value);
            })
          } catch (error) {
            
          }
    }
    onPlayPress () {
        Actions.play();
    }
    onReferencePress() {
        Actions.reference();
    }
    render() {
        return (
            <View>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../assets/images/LOGO.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
                <Card>
                    <CardSection>
                        <Scoreboard hiScore={this.props.hiScore} />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onPlayPress.bind(this)}>
                            PLAY
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onReferencePress.bind(this)}>TRAIN</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 250
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 40
    }
})

const mapStateToProps = (state) => {
    return {
        targetChar: state.game.targetChar,
        choices: state.game.choices,
        hiScore: state.game.hiScore
    }
}

export default connect(mapStateToProps, { targetUpdate, choicesUpdate, setHiScore })(MainMenu);