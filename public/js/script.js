"strict mode";

import { wordList } from "./wordlist.js";
const wordlist = wordList.toString().split(",");
const bestLetters = ["a", "e", "i", "o", "s", "t", "n"];

let startBtn = document.querySelector(".startWord");
let starterResults1 = document.querySelector(".starter_results1");
let starterResults2 = document.querySelector(".starter_results2");

startBtn.addEventListener("click", () => {
  starterResults1.textContent = "";
  starterResults2.textContent = "";
  // add starting words text to screen
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

function randomizeArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function wordsWithLetters(letters) {
  let words = [];

  wordlist.filter((w) => {
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
  return words;
}
