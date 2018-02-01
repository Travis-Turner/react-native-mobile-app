import React from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Card, CardSection } from './common';
import Scoreboard from './Scoreboard';

const MainMenu = (props) => {
    return (
        <View>
            <Header 
            headerLineOne="HIRAGANA" 
            headerLineTwo="DRILLER"
            />
            <Card>
                <Scoreboard hiScore={12} />
                <CardSection>
                    <Button>PLAY</Button>
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
};

export default MainMenu;