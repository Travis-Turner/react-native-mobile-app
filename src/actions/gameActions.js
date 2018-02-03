import {
   TARGET_UPDATE,
   CHOICES_UPDATE,
   ADD_STREAK,
   RESET_STREAK
} from './types';

import { generateChoices } from '../assets/scripts/play';

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