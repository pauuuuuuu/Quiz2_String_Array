// DO NOT HARDCODE ANY OF THE ANSWER

// STRINGs
const phrase = "The cow jumped over the moon";

// get the last word of the phrase 
let lastWord = " ";
function lastWord(words) {
  let n = phrase.lastIndexOf(" ")
  let res = phrase.substring(n);
  return res;
}

function getLastWord(words) {
			var n = words.lastIndexOf(" ");

			var res = words.substring(n);
			return res;

// get the first word in all upper case
let firstWord;

// get the last index of 'o'
// use a method
let lastO;


// ARRAYs
// initialize prime to a empty array
let primes;

// add the number 1 to the array

// add the number 3 to the array

// add the number 5 to the array

// get the array length
let arrayLength;

// LOOPS

// removes the letter 'm' from the phrase
// do not use 'replaceAll'
// HINT: Use a for loop to look at each character
let noM;

// similar to acronymn, but instead of getting the first character, get the last character of each word in the phrase 'The cow jumped over the moon'
// For example if the word is 'Launch Code', the endingChars is 'he'. 'h' from Launch and 'e' from Code. 
// The expected answer for this is 'ewdren'
let endingChars;






















// YOU'RE DONE!!!!

// DO NOT MODIFY
module.exports = {
  lastWord: lastWord,
  firstWord: firstWord,
  lastO: lastO,
  noM: noM,
  endingChars: endingChars,
  primes: primes,
  arrayLength: arrayLength
}