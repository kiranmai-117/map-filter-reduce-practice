export const words = (sentences) => sentences.flatMap((x) => x.split(" "));

export const wordsStartWith = (sentences, candidate) => {
  return words(sentences)
    .reduce((wordsWithA, word) => {
      if (word.toUpperCase().startsWith(candidate)) {
        wordsWithA.push(word);
      }
      return wordsWithA;
    }, []);
};


export const frequency = function (frequencyTable, element) {

  if (!(element in frequencyTable)) {
    frequencyTable[element] = 0;
  }
  frequencyTable[element]++;

  return frequencyTable;
};


export const countOccurance = (array, candidate) =>
  array
    .flatMap((x) => x)
    .reduce((count, element) => (element === candidate) ? ++count : count, 0);


export const isNoteFound = (element) => element === "do";


export const total = (sum, element) => sum + element;


export const removeDuplicate = function (distinctItems, element) {
  if (!distinctItems.includes(element)) {
    distinctItems.push(element);
  }
  return distinctItems;
};


export const isTempLessThan = (element) => element < 32;