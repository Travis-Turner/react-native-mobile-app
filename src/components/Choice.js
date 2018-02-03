import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import s from '../styles/ChoiceCard';

const Choice = (props) => (
    <TouchableOpacity style={s.textContainer} onPress={() => {props.handleChoice(props.testObj[props.index]);}}>
    <Text style={s.text}>{props.testObj[props.index]}</Text>
    </TouchableOpacity>
);

export default Choice;