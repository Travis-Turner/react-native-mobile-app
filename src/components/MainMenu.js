import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Scoreboard from './Scoreboard';
import { Button, Card, CardSection, Header } from './common';
import { targetUpdate, choicesUpdate } from '../actions/gameActions'; 

class MainMenu extends Component {
    componentWillMount() {
        this.props.targetUpdate();
        this.props.choicesUpdate();
    }
    onPlayPress () {
        Actions.play();
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
        choices: state.game.choices
    }
}

export default connect(mapStateToProps, { targetUpdate, choicesUpdate })(MainMenu);