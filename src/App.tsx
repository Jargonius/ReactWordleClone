import { useState } from 'react';
import './App.css';
import './colors.css';
import Dictionary from './Dictionary.class';
import GameBoard from './GameBoard';
import Keyboard from './Keyboard';
import WordGuesses from './WordGuesses.class';

function App() {
  const [guessNum, setGuessNum] = useState(4);
  const [wordLength, setWordLength] = useState(3);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordGuesses, setWordGuesses] = useState(getInitialWords());
  const [correctWord, setCorrectWord] = useState(getCorrectWord());
  const [containedLetters, setContainedLetters] = useState(setupContainedLetters());
  const [dictionary, setDictionary] = useState(new Dictionary(wordLength));

  function setupContainedLetters() {
    return new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((l) => [l, 0]));
  }

  function getInitialWords(): WordGuesses {
    return new WordGuesses(guessNum, wordLength);
  }

  function getCorrectWord() {
    const index = Math.round(Math.random() * dictionary.words.length);
    return dictionary.words[index].word.toUpperCase();
    // return 'APPLE';
  }

  function checkContainedLetter(letter: string): boolean {
    const letterCount = (correctWord.match(new RegExp(letter, 'gi')) || []).length;
    return letterCount > 0 && containedLetters.get(letter) < letterCount;
  }

  function assessWord(word: string) {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (correctWord[i] === letter) {
        wordGuesses.getGuess(wordIndex).setLetterState(i, 'correct');
        containedLetters.set(letter, containedLetters.get(letter) + 1);
      } else if (checkContainedLetter(letter)) {
        wordGuesses.getGuess(wordIndex).setLetterState(i, 'contained');
        containedLetters.set(letter, containedLetters.get(letter) + 1);
      } else {
        wordGuesses.getGuess(wordIndex).setLetterState(i, 'incorrect');
      }
    }
    setContainedLetters(containedLetters);
    setWordGuesses(wordGuesses.clone());
  }

  function updateWord(letter: string) {
    if (wordIndex < guessNum) {
      let newWord = '';
      if (letter === 'Enter') {
        submitWord(wordGuesses.getWord(wordIndex));
      } else if (letter === 'Backspace') {
        newWord = wordGuesses.getWord(wordIndex).slice(0, -1);
        wordGuesses.setWord(wordIndex, newWord);
        setWordGuesses(wordGuesses.clone());
      } else if (/^\w$/.test(letter)) {
        newWord = wordGuesses.getWord(wordIndex) + letter;
        if (newWord.length <= wordLength) {
          wordGuesses.setWord(wordIndex, newWord.toUpperCase());
          setWordGuesses(wordGuesses.clone());
        }
      }
      if (letter === 'Backspace' || /^\w$/.test(letter)) {
        isValidWord(newWord);
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    updateWord(event.key);
  }

  function isValidWord(word: string) {
    const isValid = word.length == wordLength &&
                    wordIndex < guessNum &&
                    dictionary.words.includes(word.toLowerCase());
    if (word.length < wordLength) {
      wordGuesses.setInvalidWord(wordIndex, false);
      setWordGuesses(wordGuesses.clone());
    } else {
      wordGuesses.setInvalidWord(wordIndex, !isValid);
      setWordGuesses(wordGuesses.clone());
    }
    return isValid;
  }

  function submitWord(word: string) {
    if (isValidWord(word)) {
      assessWord(word);
      setWordIndex(wordIndex + 1);
      if (wordIndex == guessNum - 1 || word == correctWord) {
        const message = word == correctWord ? 'You win!' : `Better luck next time!\nCorrect Word: ${correctWord}`;
        alert(message);
      }
    }
  }

  return (
    <div className='app' tabIndex={0} onKeyDown={handleKeyDown}>
      <GameBoard
        correctWord={correctWord}
        wordGuesses={wordGuesses}
        wordLength={wordLength}
        wordIndex={wordIndex}
      ></GameBoard>
      <Keyboard type={updateWord}></Keyboard>
    </div>
  );
}

export default App;
