import {
    TARGET_UPDATE,
    CHOICES_UPDATE,
    ADD_STREAK,
    RESET_STREAK
  } from '../actions/types';
  import { generateRandomArray } from '../assets/scripts/play';
  
  const INITIAL_STATE = {
    targetChar: 'E',
    choices: [],
    randNums: [],
    streak: 0
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch(action.type){
      case TARGET_UPDATE:
        return {
          ...state, 
          targetChar: action.payload
        }
      case CHOICES_UPDATE:
        return {
          ...state,
          choices: action.payload,
          randNums: generateRandomArray()
        }
      case ADD_STREAK:
        return {
          ...state, 
          streak: state.streak + 1
        }
      case RESET_STREAK:
        return {
          ...state,
          streak: 0
        }
      default:
        return state;
    }
  }