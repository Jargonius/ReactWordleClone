import { useState } from 'react'
import './App.css'
import './colors.css'
import dictionary from '../words/5-letter-words.json'
import GameBoard from './GameBoard'
import Keyboard from './Keyboard'

function App() {

  const [guesses, setGuesses] = useState(6);
  const [wordLength, setWordLength] = useState(5);
  const [wordIndex, setWordIndex] = useState(0);
  const [words, setWords] = useState(Array(guesses).fill(''));
  const [correctWord, setCorrectWord] = useState(getCorrectWord());
  const [state, setState] = useState('empty');

  function getCorrectWord() {
    const index = Math.random() * dictionary.words.length;
    return dictionary.words[index];
  }

  function updateWord(letter: string) {
    let newWord = words[wordIndex] + letter;
    if (letter === 'Enter') {
        submitWord(words[wordIndex]);
    } else if (letter === 'Backspace') {
      newWord = words[wordIndex].slice(0, -1)
      words[wordIndex] = newWord;
      setWords([...words]);
    } else {
      newWord = words[wordIndex] + letter;
      if (newWord.length <= wordLength) {
        words[wordIndex] = newWord;
        setWords([...words]);
      }
    }
    isValidWord(newWord);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    let letter = event.key;
    if (/^\w$/.test(event.key)) {
      letter = letter.toUpperCase()
    } 
    updateWord(letter);
  }

  function isValidWord(word: string) {
    const isValid = word.length == wordLength &&
           wordIndex < guesses - 1 &&
           dictionary.words.includes(word.toLowerCase())
    if (word.length == wordLength) {
      setState(isValid ? 'empty' : 'invalid')
    } else {
      setState('empty');
    }
    return isValid;
  }

  function submitWord(word: string) {
    if (isValidWord(word)) {
      setWordIndex(wordIndex+1);
    }
  }

  return (
    <div className="app" tabIndex={0} onKeyDown={handleKeyDown}>
      <GameBoard state={state} guesses={guesses} words={words} wordLength={wordLength} wordIndex={wordIndex}></GameBoard>
      <Keyboard type={updateWord}></Keyboard>
    </div>
  )
}

export default App
