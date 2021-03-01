export const genRandomZeroToMax = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const counter = (words: string[], symbol: string) => {
  return words.reduce((acc: number, curr: string) => {
    if (curr === symbol) {
      acc += 1;
    }
    return acc;
  }, 0);
};

export const createUnderscore = (words: string[]): string[] => {
  let result = [];
  for (const [index, letter] of words.entries()) {
    const random = genRandomZeroToMax(words.length);
    if (index === random && letter !== " ") {
      result[index] = "_";
    } else {
      result[index] = letter;
    }
  }
  return result;
};

export const addUnderscore = (words: string[], max: number = 1) => {
  let letters = createUnderscore(words);

  while (counter(letters, "_") < max || counter(letters, "_") > max) {
    letters = createUnderscore(words);
  }

  return letters;
};
