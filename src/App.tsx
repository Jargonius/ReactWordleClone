import { useState } from 'react'
import './App.css'
import './colors.css'
import words from '../words/words.json'
import GameBoard from './GameBoard'
import Keyboard from './Keyboard'

function App() {

  const [guesses, setGuesses] = useState(6);
  const [wordLength, setWordLength] = useState(5);
  const [wordIndex, setWordIndex] = useState(0);
  const [words, setWords] = useState(Array(guesses).fill(''));

  function updateWord(letter: string) {
    if (letter === 'Enter') {
        submitWord(words[wordIndex]);
    } else if (letter === 'Backspace') {
        words[wordIndex] = words[wordIndex].slice(0, -1);
        setWords([...words]);
    } else {
      const newWord = words[wordIndex] + letter;
      if (newWord.length <= wordLength) {
        words[wordIndex] = newWord;
        setWords([...words]);
      }
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (/^\w$/.test(event.key)) {
      updateWord(event.key.toUpperCase());
    } else if (event.key === 'Enter') {
      submitWord(words[wordIndex]);
    } else if (event.key === 'Backspace') {
      words[wordIndex]= words[wordIndex].slice(0, -1);
      setWords([...words]);
    }
  }

  function submitWord(word: string) {
    if (word.length == wordLength && wordIndex < guesses - 1) {
      setWordIndex(wordIndex+1);
    }
  }

  return (
    <div className="app" tabIndex={0} onKeyDown={handleKeyDown}>
      <GameBoard guesses={guesses} words={words} wordLength={wordLength}></GameBoard>
      <Keyboard type={updateWord}></Keyboard>
    </div>
  )
}

export default App
