// The char code for "a", the start of the alphetical characters.
const ASCII_CODE_A = 65;

// Generates a random into between zero and the parameter.
const randomInt = function(maxExclusive) {
  return Math.floor(Math.random() * maxExclusive);
}
// Generates a random letter string between a and z.
function generateRandomLetter()
{
  let offset = randomInt(26);
  let charCode = ASCII_CODE_A + offset;
  let letter = String.fromCharCode(charCode);
  return `<span class="letter" data-letter="${letter}">${letter}</span>`;
}

function generateRandomLetters(count) {
    let letters = [];
    for(let i = 0; i < count; i++) letters.push(generateRandomLetter());
    return letters.join('');
}
export default generateRandomLetters;