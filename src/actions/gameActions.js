import {
   TARGET_UPDATE,
   CHOICES_UPDATE
} from './types';

const generateCard = () => {
    const selectedRange = ['A', 'I', 'U', 'E', 'O', 'KA', 'KI', 'KU', 'KE', 'KO'];
    let rand = Math.floor(Math.random() * selectedRange.length);
    return selectedRange[rand];
}
const generateChoices = () => {
    let choices = [];
    const selectedRange = ['A', 'I', 'U', 'E', 'O', 'KA', 'KI', 'KU', 'KE', 'KO'];
    for (i = 0; i < 4; i++){
        let rand = Math.floor(Math.random() * selectedRange.length);
        choices.push(selectedRange[rand]);
    }
    return choices;
};
  
export const targetUpdate = () => {
    return {
        type: TARGET_UPDATE,
        payload: generateCard()
    }
};

export const choicesUpdate = () => {
    return {
        type: CHOICES_UPDATE,
        payload: generateChoices()
    }
}