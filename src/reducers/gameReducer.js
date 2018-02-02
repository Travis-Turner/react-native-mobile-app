import {
    TARGET_UPDATE,
    CHOICES_UPDATE,
    ADD_STREAK,
    RESET_STREAK
  } from '../actions/types';
  
  const INITIAL_STATE = {
    targetChar: 'E',
    choices: [],
    randNums: [],
    streak: 0
  }
  const generateRandomArray = () => {
    let arr = [];
    for (i = 0; i < 4; i++){
      let rand = Math.floor(Math.random() * 4);
      if (arr.includes(rand)){
          i--;
          continue;
      }
      arr.push(rand);
    }
    return arr;
  };
  
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