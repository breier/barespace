const TwoSumTwo = 'two-sum-two';
const HideCCNumber = 'hide-cc-number';
const MoveZeroes = 'move-zeroes';

interface Input {
  numbers?: number[];
  target?: number;
}

const getInput = (key: string): Input|null => {
  const list = getAll();
  return list[key]?.input;
}

const getAll = (): object => {
  const list = {};

  list[TwoSumTwo] = {
    "title": "Two Sum Two",
    "instructions": "Look for the two numbers that sum up to the target. Move the numbers in the Array.",
    "input": {
      "numbers": [2, 11, 7, 15],
      "target": 18
    }
  };

  list[HideCCNumber] = {
    "title": "Write a function to hide a credit card number",
    "instructions": "A credit card usually contains 16 digits with an (*) arsterisk and keeps its last four digits as is. Return the updated string with the first 12 characters replaced with asterisks (*).",
    "input": null
  };

  list[MoveZeroes] = {
    "title": "Write a function to move all zeros in the array to the end",
    "instructions": "Move all the zeros to the end of the array while maintaining relative order to the non zero elements.",
    "input": {
      "numbers": [0, 1, 0, 3, 12]
    }
  };

  return list;
}

export const ExamList = {
  TwoSumTwo,
  HideCCNumber,
  MoveZeroes,
  getAll,
  getInput
};
