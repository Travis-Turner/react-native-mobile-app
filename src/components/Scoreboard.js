import React from 'react';
import { View, Text } from 'react-native';

const Scoreboard = (props) => {
    return (
        <View>
            <Text>HI-SCORE: {props.hiScore}</Text>
        </View>
    );
};

export default Scoreboard;