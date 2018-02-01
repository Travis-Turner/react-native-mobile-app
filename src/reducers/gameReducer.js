import {
    TARGET_UPDATE,
    CHOICES_UPDATE
  } from '../actions/types';
  
  const INITIAL_STATE = {
    targetChar: 'E',
    choices: []
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
          choices: action.payload
        }
      default:
        return state;
    }
  }