//Select 4 random items and return array
export const generateChoices = () => {
    let choices = [];
    const selectedRange = [
        'A', 'I', 'U', 'E', 'O', 'KA', 'KI', 'KU', 'KE', 'KO',
        'SA', 'SHI', 'SU', 'SE', 'SO', 'TA', 'CHI', 'TSU', 'TE', 'TO'
    ];
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
//Generates a random array containing 0-3
//Each item is only repeated once
export const generateRandomArray = () => {
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