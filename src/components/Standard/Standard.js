import React from 'react';
import { View } from 'react-native';
import Streak from '../Streak';
import TargetCard from './TargetCard';
import ChoiceCard from './ChoiceCard';

const Standard = (props) => {
 return (
     <View>
        <Streak score={props.streak} onQuit={props.onQuit} />
        <TargetCard targetChar={props.choices[0]} />
        <ChoiceCard 
            choice1={props.choices[0]}
            choice2={props.choices[1]}
            choice3={props.choices[2]}
            choice4={props.choices[3]}
            targetChar={props.choices[0]}
        />
    </View>
 );
}

export default Standard;