const mapWords = (words, letter) => {
  return words.filter((word) => word.includes(letter));
};

const findIntersectingWords = (words) => {
  let letters = {};
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      console.log("letters: ", letter);
      if(!letters[letter]) {
          let matchWords = mapWords(words, letter);
          if(matchWords.length > 1) {
              letters[letter] = matchWords;
          }
      }
      console.log("Letter: ", letters);
    }
  });
};

export default findIntersectingWords;
