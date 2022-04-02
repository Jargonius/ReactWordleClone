import { useState } from 'react'
import './App.css'
import './colors.css'
import dictionary from '../words/5-letter-words.json'
import GameBoard from './GameBoard'
import Keyboard from './Keyboard'
import WordGuesses from './WordGuesses.class'

function App() {

  const [guessNum, setGuessNum] = useState(6);
  const [wordLength, setWordLength] = useState(5);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordGuesses, setWordGuesses] = useState(getInitialWords());
  const [correctWord, setCorrectWord] = useState(getCorrectWord());
  const [state, setState] = useState('empty');

  function getInitialWords(): WordGuesses {
    return new WordGuesses(guessNum, wordLength);
  }

  function getCorrectWord() {
    const index = Math.round(Math.random() * dictionary.words.length);
    return dictionary.words[index].toUpperCase();
  }

  function assessWord(word: string) {
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (correctWord[i] === letter) {
        wordGuesses.getGuess(wordIndex).setLetterState(i, 'correct');
      } else if (correctWord.includes(letter)) {
        wordGuesses.getGuess(wordIndex).setLetterState(i, 'contained');
      } else {
        wordGuesses.getGuess(wordIndex).setLetterState(i, 'incorrect');
      }
    }
    setWordGuesses(wordGuesses.clone());
  }

  function updateWord(letter: string) {
    let newWord = '';
    if (letter === 'Enter') {
      submitWord(wordGuesses.getWord(wordIndex));
    } else if (letter === 'Backspace') {
      newWord = wordGuesses.getWord(wordIndex).slice(0, -1)
      wordGuesses.setWord(wordIndex, newWord);
      setWordGuesses(wordGuesses.clone());
    } else if (/^\w$/.test(letter)) {
      newWord = wordGuesses.getWord(wordIndex) + letter;
      if (newWord.length <= wordLength) {
        wordGuesses.setWord(wordIndex, newWord.toUpperCase());
        setWordGuesses(wordGuesses.clone());
      }
    }
    if (letter !== 'Enter') {
      isValidWord(newWord);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    updateWord(event.key);
  }

  function isValidWord(word: string) {
    const isValid = word.length == wordLength &&
                    wordIndex < guessNum - 1 &&
                    dictionary.words.includes(word.toLowerCase())
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
      setWordIndex(wordIndex+1);
    }
  }

  return (
    <div className="app" tabIndex={0} onKeyDown={handleKeyDown}>
      <GameBoard correctWord={correctWord} wordGuesses={wordGuesses} wordLength={wordLength} wordIndex={wordIndex}></GameBoard>
      <Keyboard type={updateWord}></Keyboard>
    </div>
  )
}

export default App
