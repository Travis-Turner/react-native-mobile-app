import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Scoreboard from './Scoreboard';
import { Button, Card, CardSection, Header } from './deprecated';

class MainMenu extends Component {
    onPlayPress () {
        Actions.play();
    }
    render() {
        return (
            <View>
                <Header headerText="HIRAGNA DRILLER" />
                <Card>
                    <CardSection>
                        <Scoreboard hiScore={12} />
                    </CardSection>
                    <CardSection>
                        <Button
                            onPress={this.onPlayPress.bind(this)}
                        >PLAY</Button>
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

export default MainMenu;