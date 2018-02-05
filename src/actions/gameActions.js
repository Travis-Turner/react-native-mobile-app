import {
   TARGET_UPDATE,
   CHOICES_UPDATE,
   ADD_STREAK,
   RESET_STREAK,
   SET_HIGH_SCORE
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

export const setHiScore = (target) => {
    return {
        type: SET_HIGH_SCORE,
        payload: target
    }
}