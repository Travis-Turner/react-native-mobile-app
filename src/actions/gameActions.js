import {
   TARGET_UPDATE,
   CHOICES_UPDATE,
   ADD_STREAK,
   RESET_STREAK
} from './types';


const generateChoices = () => {
    let choices = [];
    const selectedRange = ['A', 'I', 'U', 'E', 'O', 'KA', 'KI', 'KU', 'KE', 'KO'];
    for (i = 0; i < 4; i++){
        let rand = Math.floor(Math.random() * selectedRange.length);
        let newChoice = selectedRange[rand];
        if (choices.includes(newChoice)){
            i--;
            continue;
        }
        choices.push(newChoice);
    }
    return choices;
};
  
export const targetUpdate = (target) => {
    return {
        type: TARGET_UPDATE,
        payload: target
    }
};

export const choicesUpdate = () => {
    return {
        type: CHOICES_UPDATE,
        payload: generateChoices()
    }
}

export const addStreak = () => {
    return {
        type: ADD_STREAK
    }
}

export const resetStreak = () => {
    return {
        type: RESET_STREAK
    }
}