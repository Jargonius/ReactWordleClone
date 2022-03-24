import { useState } from 'react'
import './App.css'
import './colors.css'
import words from '../words/words.json'
import GameBoard from './GameBoard'
import Keyboard from './Keyboard'

function App() {

  const [word, setWord] = useState('');
  const wordLength = 5;
  const guesses = 6;

  function updateGameState(letter: string) {
    const newWord = word + letter;
    if (newWord.length <= wordLength) {
      setWord(word + letter);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    console.log(event.key);
    if (/^\w$/.test(event.key)) {
      updateGameState(event.key.toUpperCase());
    } else if (event.key === 'Enter') {
      // Handle submit here.
    } else if (event.key === 'Backspace') {
      setWord(word.slice(0, -1));
    }
  }

  return (
    <div className="app" tabIndex={0} onKeyDown={handleKeyDown}>
      <GameBoard wordLength={wordLength} guesses={guesses} word={word}></GameBoard>
      <Keyboard word={word} type={updateGameState}></Keyboard>
    </div>
  )
}

export default App
