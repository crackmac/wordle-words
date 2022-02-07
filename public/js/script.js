'strict mode';

import { wordList } from './wordlist.js';
const wordlist = wordList.toString().split(',');
const bestLetters = ['a', 'e', 'i', 'o', 's', 't', 'n'];

const starter_btn = document.querySelector('.starter_btn');
const starterResults1 = document.querySelector('.starter_results1');
const starterResults2 = document.querySelector('.starter_results2');
const find_words_btn = document.querySelector('.find_words_btn');
const find_wordsResults1 = document.querySelector('.find_words_results1');
const find_wordsResults2 = document.querySelector('.find_words_results2');

const find_words_input1 = document.querySelector('.form_find_words_input1');
const find_words_input2 = document.querySelector('.form_find_words_input2');
const find_words_input3 = document.querySelector('.form_find_words_input3');
const find_words_input4 = document.querySelector('.form_find_words_input4');
const find_words_input5 = document.querySelector('.form_find_words_input5');

starter_btn.addEventListener('click', () => {
  starterResults1.textContent = '';
  starterResults2.textContent = '';
  // find words from short list of popular letters
  const sliceBestLetters = randomizeArray(bestLetters).slice(3);
  const mixedWords = randomizeArray(wordsWithLetters(sliceBestLetters));
  // console.log(
  //   `Five words containing the most common letters ${sliceBestLetters}\n${mixedWords.slice(
  //     0,
  //     5
  //   )}\n`
  // );
  starterResults1.textContent = `Some words containing the most common letters ${sliceBestLetters}`;
  starterResults2.textContent += `${mixedWords.slice(0, 4)}`;
});

find_words_btn.addEventListener('click', () => {
  find_wordsResults1.textContent = '';
  find_wordsResults2.textContent = '';
  const guess = [];
  guess[0] = find_words_input1.value;
  guess[1] = find_words_input2.value;
  guess[2] = find_words_input3.value;
  guess[3] = find_words_input4.value;
  guess[4] = find_words_input5.value;
  // find words from supplied letters
  // const find_words_results = randomizeArray(
  //   wordsWithLetters(['a', 'l', 't', 'o'])
  // );
  // console.log(`${guess}`);
  find_wordsResults1.textContent = `${guess}`;
  find_wordsResults2.textContent = `${guess}`;
});

function randomizeArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function wordsWithLetters(letters) {
  let words = [];

  wordlist.filter(w => {
    let count = letters.length;
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      if (w.includes(letter)) {
        count--;
        if (count === 0) {
          // console.log(`Word is ${w}`);
          words.push(w);
        }
      }
    }
  });
  if (words.length === 0) {
    console.error('words.length is zero');
    words.push('Sorry, no results. Try again.');
  }
  console.log(words);
  return words;
}
